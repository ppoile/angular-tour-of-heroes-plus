import { Component, OnInit } from '@angular/core';

import { Login } from '../login';
import { LoginService } from '../login.service';
import { Slave } from '../slave';
import { SlaveService } from '../slave.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  logins: Login[];
  selectedLogins: Login[];
  loginFilterText: string = "Logins: Show All";
  slaves: Slave[];
  selectedSlaves: Slave[];
  slaveFilterText: string = "Slaves: Show All";
  searchText: string;
  heroes: Hero[];

  constructor(
    private loginService: LoginService,
    private slaveService: SlaveService,
    private heroService: HeroService,
    private messageService: MessageService)
  { }

  ngOnInit() {
    this.subscribeLogins()
    this.subscribeSlaves()
    this.subscribeHeroes()
  }

  subscribeHeroes(): void {
    var observable = this.heroService.getObservable()
    observable.subscribe(heroes => this.heroes = heroes);
  }

  subscribeSlaves(): void {
    var observable = this.slaveService.getObservable()
    observable.subscribe(slaves => this.slaves = slaves);
  }

  subscribeLogins(): void {
    var observable = this.loginService.getObservable()
    observable.subscribe(logins => this.logins = logins);
  }
}
