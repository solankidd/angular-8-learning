import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({providedIn: 'root'})
export class AccountService {
    accounts = [
        {
            id: 1,
            name: 'Master Account',
            status: 'active'
        },
        {
            id: 2,
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            id: 3,
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();  

    constructor(private loggingService: LoggingService) { }

    add(name: string, status: string){
        this.accounts.push({id: new Date().getTime(), name: name, status: status});
        this.loggingService.logStatusChange(`onAdd: ${status}`);
    }

    updateStatus(id:number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }

    get(id: number){
        return this.accounts.find( account => account.id === +id );
    }
}