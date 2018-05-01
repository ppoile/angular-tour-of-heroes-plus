import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getObservable(): Observable<Hero[]> {
    this.log('fetching heroes...');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`fetched ${heroes.length} heroes`)),
      catchError(this.handleError('getHeroes', [])));
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetching hero id=${id}...`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(hero => this.log(`fetched hero ${hero.name}(id=${id})`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)));
  }

  searchHeroes(term: string): Observable<Hero[]> {
    this.log(`searching heroes matching "${term}"...`);
    const url = `${this.heroesUrl}?name=${term}`;
    return this.http.get<Hero[]>(url).pipe(
      tap(heroes => this.log(`found ${heroes.length} heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', [])));
  }

  updateHero(hero: Hero): Observable<any> {
    this.log(`updating hero id=${hero.id}...`);
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')));
  }

  addHero(hero: Hero): Observable<Hero> {
    this.log(`adding hero id=${hero.id}...`);
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`added hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero')));
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    this.log(`deleting hero id=${id}...`);
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero')));
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
