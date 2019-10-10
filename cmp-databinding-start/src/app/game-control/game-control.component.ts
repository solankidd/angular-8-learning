import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalRef;
  count = 0;
  @Output() startEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onStart() {
    this.intervalRef = setInterval(() => {
      this.startEvent.emit(this.count++);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalRef);
    console.log('%c%s', 'color: #aa00ff', 'Stop');
  }
}
