import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  totalAmount:any=0;
  
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    this.getTotalAmount()
  }
  deleteCart(i:any)
  {
    this.commonService.cartList.splice(i,1);
    this.getTotalAmount()
  }
  getTotalAmount()
  {
    this.totalAmount=0;
    this.commonService.cartList.forEach((element: any) => {
      this.totalAmount+=element.price;
    });
  }
  allDeleteCart()
  {
    this.commonService.cartList.splice(i);
    this.deleteCart(i);
  }
  
}
function i(i: any) {
  throw new Error('Function not implemented.');
}

