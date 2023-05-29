import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { EmployeeService } from '../service/employee.service';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-empupdate',
  templateUrl: './empupdate.component.html',
  styleUrls: ['./empupdate.component.css']
})

export class EmpupdateComponent implements OnInit {

  id:any
  employee:any

  empForm=new FormGroup(
    {
      name:new FormControl(),
      department:new FormControl(),
      salary:new FormControl(),
      address:new FormControl(),
      phone:new FormControl(),
      email:new FormControl()

    }
  )

  constructor(private route:ActivatedRoute,private service:EmployeeService,private router:Router){
    this.id=this.route.snapshot.params["id"]
  }

  ngOnInit(): void {

    this.service.getEmployeeDetail(this.id).subscribe(res=>{

      this.employee=res
      this.empForm.patchValue(this.employee)

    })
    
  }

  performUpdate(){
    let formData=this.empForm.value
    this.service.employeeUpdate(this.id,formData).subscribe(res=>this.router.navigateByUrl(''))
  }

}
