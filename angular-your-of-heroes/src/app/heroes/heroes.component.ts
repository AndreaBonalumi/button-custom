import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name', 'button'];
  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHeroes();
    this.route.snapshot.paramMap.get('id')
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
