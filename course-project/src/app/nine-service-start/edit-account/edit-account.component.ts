import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  account: object;
  constructor(private accountService: AccountService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.account = this.accountService.get( this.activeRoute.snapshot.params['id'] );

    this.activeRoute.params.subscribe(
      (updatedParam: Params)=>{
        this.account = this.accountService.get( updatedParam['id'] );
      }
    )
  }

}
