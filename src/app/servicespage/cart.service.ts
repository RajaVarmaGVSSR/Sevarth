import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Time } from '@angular/common';
import { Service, Employee, Account, ActiveAccount, Message } from './cart.model';
import { throwToolbarMixedModesError } from '@angular/material';

@Injectable({providedIn: 'root'})

export class CartService {

  profileId: string;
  orders: Service[];
   id: string;
   serviceName: string;
   time: Time;
   date: string;
   drug: string;
   persons: number;
   rooms: number;
   groceries: boolean;
   address: string;


   empName: string;
   empAge: number;
   empGender: number;
   empCook: number;
   empClean: number;
   empPhar: number;


  userName: string;
  emailId: string;
  pwd: string;

  constructor(private http: HttpClient) {
    this.orders = [];
  }

  readPharamacy(serviceName: string, time: Time, date: string, drug: string, address: string) {
    this.serviceName = serviceName;
    this.time = time;
    this.date = date;
    this.drug = drug;
    this.address = address;
    const service = { id: null, profileId: this.profileId, serviceName: serviceName, time: time, date: date, drug: drug, rooms: null, persons: null, groceries: null, address: address };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/services', service)
      .subscribe((responseData) => {
        this.id = responseData.postId;
      });
  }

  readCooking(serviceName: string, time: Time, date: string, persons: number, groceries: boolean, address: string) {
    this.serviceName = serviceName;
    this.time = time;
    this.date = date;
    this.persons = persons;
    this.groceries = groceries;
    this.address = address;
    const service = { id: null, profileId: this.profileId, serviceName: serviceName, time: time, date: date, drug: null, rooms: null, persons: persons, groceries: groceries, address: address };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/services', service)
      .subscribe((responseData) => {
        this.id = responseData.postId;
      });
  }

  readCleaning(serviceName: string, time: Time, date: string, rooms: number, address: string) {
    this.serviceName = serviceName;
    this.time = time;
    this.date = date;
    this.rooms = rooms;
    this.address = address;
    const service = { id: null, profileId: this.profileId, serviceName: serviceName, time: time, date: date, drug: null, rooms: rooms, persons: null, groceries: null, address: address };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/services', service)
      .subscribe((responseData) => {
        this.id = responseData.postId;
      });
  }

  getOrders() {
    console.log(this.profileId);
    return this.http.get<Service[]>(`http://localhost:3000/api/orders/${this.profileId}`);
      // .subscribe(responseData => {
      //   this.orders = responseData;
      //   }
      // );
  }

  getOrdersAll() {
    return this.http.get<Service[]>(`http://localhost:3000/api/orders`);
  }

  getAccountsAll() {
    return this.http.get<Account[]>(`http://localhost:3000/api/accounts`);
  }


  getEmployeesAll() {
    return this.http.get<Employee[]>('http://localhost:3000/api/employees');
  }

  getMessages() {
    return this.http.get<Message[]>('http://localhost:3000/api/message');
  }


  getActiveAccount() {
    return this.http.get<ActiveAccount>('http://localhost:3000/api/activeAccount');
  }

  updateStatus(id: string, employeeId: string) {
    return this.http.patch(`http://localhost:3000/api/orders/update/${id}`, {empId: employeeId});
  }

  updateEmployeeStatus(employeeId: string) {
    return this.http.patch(`http://localhost:3000/api/employees/update/${employeeId}`, null);
  }

  cancelOrder(id: string) {
    return this.http.patch(`http://localhost:3000/api/orders/cancel/${id}`, null);
  }

  cancelEmployee(id: string) {
    return this.http.patch(`http://localhost:3000/api/employees/cancel/${id}`, null);
  }

  addActiveAccount(profileId: string) {
    this.http.patch<{message: string, accId: string}>('http://localhost:3000/api/login/active', {profileId: profileId})
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  addEmployee(empName: string, empAge: number, empGender: number, empCook: number, empClean: number, empPhar: number) {
    this.empName = empName;
    this.empAge = empAge;
    this.empGender = empGender;
    this.empCook = empCook;
    this.empClean = empClean;
    this.empPhar = empPhar;
    const emp = { empName: this.empName, empAge: this.empAge, empGender: this.empGender, empCook: this.empCook, empClean: this.empClean, empPhar: this.empPhar, status: 0 }
    this.http.post<{message: string, empId: string}>('http://localhost:3000/api/employee/add', emp)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }


  addAccount(userName: string, emailId: string, pwd: string) {
    this.userName = userName;
    this.emailId = emailId;
    this.pwd = pwd;
    const acc = { userName: this.userName, emailId: this.emailId, pwd: this.pwd };
    this.http.post<{message: string, accId: string}>('http://localhost:3000/api/profile/add', acc)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  addMessage(name: string, email: string, sub: string, msg: string) {
    this.http.post<{message: string, accId: string}>('http://localhost:3000/api/message/add', {name: name, email: email, subject: sub, message: msg})
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

}
