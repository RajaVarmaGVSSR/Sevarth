import { Component, OnInit } from '@angular/core';
import { CartService } from './servicespage/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sevarth';
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getActiveAccount().subscribe((profileId) => {
      this.cartService.profileId = profileId.profileId;
      console.log(this.cartService.profileId);
    });
  }
}
