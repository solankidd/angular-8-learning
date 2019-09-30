import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('serverCreatedAlias') serverCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string; serverContent: string }>();

  @Input() serverElements;
  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    /* #normalApproachWithoutEvent this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    /* #normalApproachWithoutEvent this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }
}
