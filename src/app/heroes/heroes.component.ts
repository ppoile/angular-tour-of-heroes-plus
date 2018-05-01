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
  loginFilterText = 'Logins: Show All';
  slaves: Slave[];
  selectedSlaves: Slave[];
  slaveFilterText = 'Slaves: Show All';
  searchText: string;
  heroes: Hero[];

  constructor(
    private loginService: LoginService,
    private slaveService: SlaveService,
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.subscribeLogins();
    this.subscribeSlaves();
    this.subscribeHeroes();
  }

  subscribeHeroes(): void {
    const observable = this.heroService.getObservable();
    observable.subscribe(heroes => this.heroes = heroes);
  }

  subscribeSlaves(): void {
    const observable = this.slaveService.getObservable();
    observable.subscribe(slaves => this.slaves = slaves);
  }

  subscribeLogins(): void {
    const observable = this.loginService.getObservable();
    observable.subscribe(logins => this.logins = logins);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(
      hero => { this.heroes.push(hero); });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
