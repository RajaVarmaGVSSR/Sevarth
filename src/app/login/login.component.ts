import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../servicespage/cart.service';
import { Account } from '../servicespage/cart.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileId = '';
  flag = 0;
  count = 0;

  accounts: Account[];
  constructor(private router: Router, private cartService: CartService, private changeDetector: ChangeDetectorRef) {
    this.accounts = [];
  }
  /*loginValidation(form: NgForm) {
    if ( form.value.username === this.userName && form.value.password === this.password) {
      this.flag = 0;
      this.cartService.profileId = this.profileId;
      this.router.navigate(['/home']);
    } else {
      this.flag = 1;
      return;
    }
  }*/

  loginValidation(form: NgForm) {
    for (let i = 0; i < this.accounts.length; i++) {
      if ( this.accounts[i].userName === form.value.username && this.accounts[i].pwd === form.value.password ) {
        this.flag = 0;
        this.profileId = (i + 1).toString();
        this.cartService.profileId = (i + 1).toString();
        console.log(this.profileId);
        this.cartService.addActiveAccount(this.profileId);

        this.router.navigate(['/home']);
      } else {
        this.count++;
      }
    }
    if (this.count === this.accounts.length) {
      this.flag = 1;
    }
  }



  ngOnInit() {
    this.getData();
  }


  private getData() {
    this.cartService.getAccountsAll().subscribe(data => this.accounts = data);

    this.changeDetector.detectChanges();
  }
}
