import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employees:any

  constructor(private service:EmployeeService){

  }
  ngOnInit(): void {
    this.service.getAllEmployees().subscribe(res=>this.employees=res)
  }

  deleteEmployee(id:any){
    this.service.employeeDelete(id).subscribe(res=>this.ngOnInit())
  }
}
