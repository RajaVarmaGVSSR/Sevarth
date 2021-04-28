import { Component, OnInit } from '@angular/core';
import { CartService } from '../servicespage/cart.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  addAccount(form: NgForm) {
    this.cartService.addAccount(form.value.newUsername, form.value.newEmail, form.value.newPassword);
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
