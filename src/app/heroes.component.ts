import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";






@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {

  constructor(private heroservice: HeroService) { }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
     this.heroservice.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

}
