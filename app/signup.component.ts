import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) { }


    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoHeroes(): void {
        this.router.navigate(['/heroes']);
    }

    //报名
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
            });
    }

    //取消报名

    delete(name: string): void {

    }
}
