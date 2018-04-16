import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Login } from './login';
import { LOGINS } from './mock-logins';
import { MessageService } from './message.service';

@Injectable()
export class LoginService {

  constructor(private messageService: MessageService) { }

  getObservable(): Observable<Login[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('LoginService: fetched logins');
    return of(LOGINS);
  }
}
