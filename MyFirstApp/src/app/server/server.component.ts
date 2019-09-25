// we can't use it like below
// * export class ServerComponent {}
// we need to provide something that will tell angular that it is special class
// we add special decorator

import { Component } from '@angular/core';

// Angular component and provides configuration metadata that determines how the component should be processed
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'gray';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
