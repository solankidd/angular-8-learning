import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [] removed LoggingService from here and added at app.module level
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingServies: LoggingService, private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }
}
