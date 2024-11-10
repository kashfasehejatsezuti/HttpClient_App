import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userList: any[] = [];
  empList: any[] = [];
  http = inject(HttpClient);
  // constructor(private http: HttpClient) {}
  getAllUser() {
    debugger;
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        debugger;
        this.userList = res;
        console.log(res);
      });
  }

  getAllEmployee() {
    debugger;
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllEmployee'
      )
      .subscribe((res: any) => {
        debugger;
        this.empList = res.data;
        console.log(res);
      });
  }
}
