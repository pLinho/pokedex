import { PokedexService } from '../../../api/services/pokedex.service';
import { Pokemon } from '../../../api/models/pokemon';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'ci-battle',
    templateUrl: 'battle.component.html',
    styleUrls: [
        'battle.component.scss'
    ]
})
export class BattleComponent {
    player1?: Pokemon;
    player2?: Pokemon;
    constructor(
        private readonly pokedex: PokedexService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.pokedex.pokemon(params['player_1']).subscribe(result =>
                this.player1 = result);
            this.pokedex.pokemon(Math.floor(Math.random() * 653)).subscribe(result =>
                this.player2 = result);
        });

    }

    selectTypeUrl(url: string) {

    }

}