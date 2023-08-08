import { Component, OnInit } from '@angular/core';
import { OrderList, Province } from '../mockup';
import { OrderService } from '../admin/service/order.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss'],
})
export class Form3Component implements OnInit {
  provinces = [
    'Kampong Thom',
    'Kampong Cham',
    'Kratie',
    'Steung Treng',
    'Kampong Chhnang',
    'Mondulkiri',
    'Tbong Khmum',
    'Ratanakiri',
  ];
  colors = ['Red', 'Blue', 'Black', 'Gold', 'Rose Gold', 'Silver'];
  hideForm = true;
  error: string = ' ';
  successMessage: string = '';

  value: string = '';
  amount: number = 0;

  color: Array<{
    value: string;
    amount: number;
  }> = [];

  input: any;
  colorInput: any;

  addColor(event: any, color: string) {
    console.log(`Color value: ${event.target.value}`);
    this.order.color.push({
      value: color,
      amount: event.target.value,
    });
    console.log(this.color);
  }

  order: any = {
    province: '',
    region: '',
    storeName: '',
    date: new Date(),
    pModel: '',
    amountM: 0,
    color: [],
  };

  constructor(private orderService: OrderService) {}
  ngOnInit(): void {}

  show() {
    this.hideForm = !this.hideForm;
    console.log('hide form');
  }

  AddOrder(orderForm: NgForm) {
    console.log(`Order: ${this.order}`);
    this.orderService.addOrder(this.order).subscribe(
      (data) => {
        this.successMessage = 'Room added succesful';
        orderForm.resetForm({
          province: '',
          region: '',
          storeName: '',
          date: new Date(),
          pModel: '',
          amountM: 0,
          color: [],
        });
      },
      (err: HttpErrorResponse) => {
        if (err) {
          this.error = 'Please input a valid form!';
        }
      }
    );
  }
}
