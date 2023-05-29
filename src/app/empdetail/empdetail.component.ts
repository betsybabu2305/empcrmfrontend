import { Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  id:any
  employee:any

  constructor(private route:ActivatedRoute,private service:EmployeeService){
    this.id=this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.service.getEmployeeDetail(this.id).subscribe(res=>this.employee=res)
  }

}
