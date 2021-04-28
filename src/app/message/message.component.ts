import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../servicespage/cart.service';
import { Message } from '../servicespage/cart.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: Message[];
  constructor(private cartService: CartService, private changeDetector: ChangeDetectorRef) {
    this.messages = [];
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.cartService.getMessages().subscribe(data => this.messages = data);
    this.changeDetector.detectChanges();
  }

}
