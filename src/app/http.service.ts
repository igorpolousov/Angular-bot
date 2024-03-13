import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Order} from "./model";

@Injectable()
export class HttpService{
    
    constructor(private http: HttpClient){ }
  
    postData(order: Order){
           
        const body = {name: order.name, age: order.totalSumm};
        return this.http.post("http://89.111.141.36:8000/web-data", body); 
    }
}