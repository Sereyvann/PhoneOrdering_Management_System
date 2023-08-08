import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { Color, OrderList, Province } from 'src/app/mockup';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList: OrderList[] = [
    {  
    province: Province.KAMPONGCHAM,
    region: "K-1",
    storeName: "Broom",
    date: new Date,
    pModel: "V27",
    amountM: 5,
    color: [{ value: Color.BLACK, amount: 2}, {value: Color.BLUE, amount: 3}]
    },
    {  
    province: Province.KAMPONGCHAM,
    region: "K-1",
    storeName: "Broom",
    date: new Date,
    pModel: "V27",
    amountM: 5,
    color: [{ value: Color.BLACK, amount: 2}, {value: Color.BLUE, amount: 3}]
    },
    {  
    province: Province.KAMPONGCHAM,
    region: "K-1",
    storeName: "Broom",
    date: new Date,
    pModel: "V27",
    amountM: 5,
    color: [{ value: Color.BLACK, amount: 2}, {value: Color.BLUE, amount: 3}]
    },
  ]

  constructor(@Inject(APP_SERVICE_CONFIG) private config : AppConfig, 
  private http: HttpClient) { 

    console.log(this.http.get<OrderList[]>('/orders'))
    console.log("orderservice has been created")
  }

  getOrders() {
    return this.http.get<OrderList[]>(environment.apiEndpoint+ 'orders')
    // return this.orderList
  }

  addOrder(order: OrderList) {
    return this.http.post<OrderList[]>(environment.apiEndpoint + 'orders', order)
  }

  deleteOrder(id: string){
    return this.http.delete<OrderList[]>(environment.apiEndpoint + `orders/${id}`)
  }
 
}
