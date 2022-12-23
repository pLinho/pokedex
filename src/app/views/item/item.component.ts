import { PokedexService } from '../../../api/services/pokedex.service';
import { Pokemon } from '../../../api/models/pokemon';
import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'ci-item',
    templateUrl: 'item.component.html',
    styleUrls: [
        'item.component.scss'
    ]
})
export class ItemComponent {
    item?: Pokemon;
    constructor(
        private readonly pokedex: PokedexService,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.pokedex.getPokemon(params['code']).subscribe(result =>
                this.item = result);
        });
    }
}