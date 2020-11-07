import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({providedIn: 'root'})
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();  

    constructor(private loggingService: LoggingService) { }

    add(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(`onAdd: ${status}`);
    }

    updateStatus(id:number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}