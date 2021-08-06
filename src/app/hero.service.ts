import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes = (): Observable<Hero[]> => {
    return of(HEROES);
  }

  constructor() { }
}
