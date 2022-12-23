import { PokedexService } from './../../../api/services/pokedex.service';
import { Pokemon } from './../../../api/models/pokemon';
import { Component } from "@angular/core";


@Component({
    selector: 'ci-cards',
    templateUrl: 'cards.component.html',
    styleUrls: [
        'cards.component.scss'
    ]
})
export class CardsComponent {
    list?: Pokemon[];
    constructor(
        pokedex: PokedexService,
    ) { }
}