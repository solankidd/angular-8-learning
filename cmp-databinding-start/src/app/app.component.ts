import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElementsAppCmp = [{ type: 'server', name: 'test server', content: 'just content!' }];
}
