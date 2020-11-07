import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [] removed LoggingService from here and added at app.module level
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.add(accountName, accountStatus);
  }
}
