import { Component, OnInit } from '@angular/core';

import { Login } from '../login';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login-selector',
  templateUrl: './login-selector.component.html',
  styleUrls: ['./login-selector.component.css']
})
export class LoginSelectorComponent implements OnInit {
  logins: Login[];
  selectedLogins: Login[];
  filterText = 'Logins: Show All';

  constructor(
    private loginService: LoginService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.subscribeLogins();
  }

  subscribeLogins(): void {
    const observable = this.loginService.getObservable();
    observable.subscribe(logins => this.logins = logins);
  }
}
