import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Slave } from './slave';
import { SLAVES } from './mock-slaves';
import { MessageService } from './message.service';

@Injectable()
export class SlaveService {

  constructor(private messageService: MessageService) { }

  getObservable(): Observable<Slave[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('SlaveService: fetched slaves');
    return of(SLAVES);
  }
}
