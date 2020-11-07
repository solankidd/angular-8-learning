import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-nine-service-start',
  templateUrl: './nine-service-start.component.html',
  styleUrls: ['./nine-service-start.component.scss'],
  // providers: [] // removed AccountService from here and added at app.module level
})
export class NineServiceStartComponent implements OnInit {

  constructor(private accountService: AccountService){}
  accounts: {name: string, status: string}[] = [];

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
}
