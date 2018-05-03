import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  clickMessage: string = '';
  values: string = '';
  values1: string = '';
  values2: string = '';
  value3: string = '';
  value4: string = '';
  value5: string = '';
  powers: string[] = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
  ];
  submitted = false;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getObservable()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  onClickMe(): void {
    this.clickMessage = 'Here we go...';
  }

  onKey(event: any): void {
    this.values += event.target.value + ' | ';
    //this.values += event.key + ' | ';
  }

  onKey1(event: KeyboardEvent): void {
    this.values1 += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey2(value: string): void {
    this.values2 += value + ' | ';
  }

  onEnter3(value: string): void {
    this.value3 = value;
  }

  update4(value: string): void {
    this.value4 = value;
  }

  update5(value: string): void {
    this.value5 = value;
  }

  reset5(): void {
    this.value5 = '';
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
