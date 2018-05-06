import { Component, OnInit } from '@angular/core';

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
  slaves: Slave[];
  selectedSlaves: Slave[];
  slaveFilterText = 'Slaves: Show All';
  searchText: string;
  heroes: Hero[];

  constructor(
    private slaveService: SlaveService,
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit() {
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
