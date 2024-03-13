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
        const URL = "http://89.111.141.36:80/web-data"
        //const URL= 'http://localhost:3000/web-data'
        const body = {name: order.name, totalSum: order.totalSum};
        const headers = {'Content-Type': 'application/json;charset=utf-8'}
        return this.http.post(URL, body); 
    }
}