import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

	selectedHero?: Hero;

	heroes: Hero[] = [];

	onSelect = (hero: Hero) => {
		this.selectedHero = hero;
	}

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.heroes = this.heroService.getHeroes();
	}
}