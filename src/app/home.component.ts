import { Component } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { HttpService} from "./http.service";
import { Order } from "./model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers: [HttpService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  order: Order=new Order("", 0);

  receivedOrder: Order | undefined;

  done: boolean = false;

  constructor(private httpService: HttpService){}
    submit(user: Order){
        this.httpService.postData(this.order)
                .subscribe({
                    next:(data: any) => {this.receivedOrder=data; this.done=true;},
                    error: error => console.log(error)
                });
              }
}
