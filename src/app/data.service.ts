import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }
  
    getCategory():Observable<any>{
      let res=this._HttpClient.get('https://dummyjson.com/products/category-list');
      return res;
    }

    getProducts(catergory:any):Observable<any>{
      let res=this._HttpClient.get(`https://dummyjson.com/products/category/${catergory}`);
      return res;
    }
   
    getSingleProduct(id:number):Observable<any>{
       let res=this._HttpClient.get(`https://dummyjson.com/products/${id}`);
       return res;
    }

    login(data:any):Observable<any>{
      let res=this._HttpClient.post('https://dummyjson.com/user/login',data);
      return res;
    }
    islogined=new BehaviorSubject(false);
}
