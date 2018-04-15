import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  searchText: string;
  heroes: hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.subscribeHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('Heroes: hero \'' + hero.name + '\'selected');
  }

  subscribeHeroes(): void {
    var observable = this.heroes = this.heroService.getHeroesObservable()
    observable.subscribe(heroes => this.heroes = heroes);
  }
}
