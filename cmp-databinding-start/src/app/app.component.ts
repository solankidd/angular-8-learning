import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElementsAppCmp = [{ type: 'server', name: 'test server d', content: 'just content!' }];

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

  onTest(serverData: { serverName: string; serverContent: string }) {
    console.log(serverData);
  }
}
