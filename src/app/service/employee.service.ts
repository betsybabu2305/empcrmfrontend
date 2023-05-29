import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 


  }

  baseUrl='http://127.0.0.1:8000/api/employees'

  getAllEmployees(){
    // return fetch(this.baseUrl)
    // this.http.get(`${this.baseUrl}/`).subscribe(res=>console.log(res))
    return this.http.get(`${this.baseUrl}/`)
    
  }

  getEmployeeDetail(id:any){
    // return fetch(`${this.baseUrl}/${id}`)
    return this.http.get(`${this.baseUrl}/${id}/`)
  }

  employeeDelete(id:any){
    // return fetch(`${this.baseUrl}/${id}`)
    return this.http.delete(`${this.baseUrl}/${id}/`)
  }

  employeeUpdate(id:any,data:any){
    // return fetch(`${this.baseUrl}/${id}`)
    return this.http.put(`${this.baseUrl}/${id}/`,data)
  }

  employeeCreate(data:any){
    // return fetch(this.baseUrl)
    return this.http.post(`${this.baseUrl}/`,data)
  }
}
