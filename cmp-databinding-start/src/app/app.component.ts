import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElementsAppCmp = [{ type: 'server', name: 'test server 1', content: 'just content!' }];
  numFromGameControl = 1;

  onServerAddedInsideCockpit(serverData: { serverName: string; serverContent: string }) {
    this.serverElementsAppCmp.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAddedInsideCockpit(bluePrintData: { serverName: string; serverContent: string }) {
    this.serverElementsAppCmp.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  changeFirstElementName() {
    this.serverElementsAppCmp[0].name = 'test server 1 update';
  }

  destroyElement() {
    this.serverElementsAppCmp.splice(0, 1);
  }

  // START: game control task
  onStartEvent(data: number) {
    this.numFromGameControl = data;
  }
  // END: game control task
}
