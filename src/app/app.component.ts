import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home.component';
import { HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet,HttpClientModule ],
  template: `
  <main>
    <section class="content">
        <app-home></app-home>
      </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
