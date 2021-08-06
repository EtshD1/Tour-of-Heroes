import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

	selectedHero?: Hero;

	heroes: Hero[] = [];

	onSelect = (hero: Hero) => {
		this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
		this.selectedHero = hero;
	}

	constructor(private heroService: HeroService, private messageService: MessageService) { }

	ngOnInit() {
		this.heroService.getHeroes().subscribe(heroes => {
			this.heroes = heroes;
		});
	}
}