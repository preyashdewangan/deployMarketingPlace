import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url='https://dummy.restapiexample.com/api/v1/delete/2'
  appName:any=' ';
  cartValue:any=0;
  cartList:any=[];
    
  constructor(private httpClient:HttpClient) { }
  getPosts() 
  {
    return this.httpClient.get(this.url);
  }
}
