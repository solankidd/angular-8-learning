import { Component } from '@angular/core';


@Component({
  selector: 'app-root', // 1. this is selector, to replace everything in index.html file inside app-root tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'dhaval';
  title = 'this is app component';
}
