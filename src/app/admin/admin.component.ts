import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { Color, OrderList, Province } from '../mockup';
import { OrderService } from './service/order.service';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orders: any[] = [];
  allorders: number = 0;
  page: number = 1;
  orderPerPage: number = 10;
  totalOrders: any;
  fileName = 'OrderList.xlsx';

  @Output() selectedOrder = new EventEmitter<OrderList>();

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error')
  });

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });

    this.orderService.getOrders().subscribe((order) => {
      this.orders = order;
      console.log(order);
      this.totalOrders = order.length;
    });

    // this.orders = this.orderService.getOrders()
  }

  constructor(@SkipSelf() private orderService: OrderService) {}

  addOrder() {
    const order1: OrderList = {
      // id = "",
      province: Province.KAMPONGCHAM,
      region: 'K-1',
      storeName: 'Broom',
      date: new Date(),
      pModel: 'V27',
      amountM: 5,
      color: [
        { value: Color.BLACK, amount: 2 },
        { value: Color.BLUE, amount: 3 },
      ],
    };
    this.orderService.addOrder(order1).subscribe((data) => {
      console.log(data);
      this.orders.push(data);
    });

    // this.orders = [... this.orders, order1]
  }

  deleteOrder() {
    const id = document.getElementById('_id');
    if (id != null) {
      console.log(id.innerHTML);
      this.orderService.deleteOrder(id.innerHTML).subscribe((data) => {
        this.orderService.getOrders().subscribe((order) => {
          this.orders = order;
          console.log(order);
        });
      });
    }
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
