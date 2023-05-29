import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { EmployeeService } from '../service/employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent {

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

  addEmployee(){
    let formData=this.empForm.value
    this.service.employeeCreate(formData).subscribe(res=>this.router.navigateByUrl(''))   
  }

  constructor(private service:EmployeeService,private router:Router){

  }

}

