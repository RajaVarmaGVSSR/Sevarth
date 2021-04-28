import { Time } from '@angular/common';

export interface Service {
  status: string;
  profileId: string;
  _id: string;
  serviceName: string;
   time: Time;
   date: string;
   drug: string;
   persons: number;
   rooms: number;
   groceries: string;
   empId: string;
   address: string;
}

export interface Employee {
  _id: string;
  empName: string;
  empAge: number;
  empGender: number;
  empCook: number;
  empClean: number;
  empPhar: number;
  status: number;
}

export interface Account {
  profileId: number;
  _id: string;
  userName: string;
  emailId: string;
  pwd: string;
}

export interface ActiveAccount {
  profileId: string;
  _id: string;
}

export interface Message {
  name: string;
  _id: string;
  email: string;
  subject: string;
  message: string;
}
