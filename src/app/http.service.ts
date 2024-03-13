import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "./model";

@Injectable()
export class HttpService{
    
    constructor(private http: HttpClient){ }
  
    postData(order: Order){

        const myHeaders = new HttpHeaders().set(
            'Content-Type','application/json;charset=utf-8'
        );
           
        const body = {name: order.name, age: order.totalSumm};
        const headers = {'Content-Type': 'application/json;charset=utf-8'}
        return this.http.post("http://89.111.141.36:8000/web-data", body); 
    }
}