import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(private heroService: HeroService) { }

	add = (name: string) => {
		const heroName = name.trim();
		if (name !== '') {
			this.heroService.addHero(heroName)
				.subscribe(hero => {
					this.heroes.push(hero);
				})
		}
	}

	delete = (id: number) => {
		this.heroes = this.heroes.filter(h => h.id !== id);
		this.heroService.deleteHero(id).subscribe();
	}

	ngOnInit() {
		this.heroService.getHeroes().subscribe(heroes => {
			this.heroes = heroes;
		});
	}
}