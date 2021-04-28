import { Component, OnInit } from '@angular/core';
import { CartService } from '../servicespage/cart.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  postMessage(form: NgForm) {
    this.cartService.addMessage(form.value.name, form.value.email, form.value.subject, form.value.message);
    this.router.navigate(['/connect']);
  }

  ngOnInit() {
  }

}
