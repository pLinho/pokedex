import { PokedexService } from '../../../api/services/pokedex.service';
import { Pokemon } from '../../../api/models/pokemon';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';


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
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.pokedex.pokemon(params['code']).subscribe(result => {
                this.item = result;
                var mensagem = new SpeechSynthesisUtterance();
                mensagem.text = this.item.name || '';
                speechSynthesis.speak(mensagem);
            }
            );

        });
    }

    selectTypeUrl(url: string) {

    }

    battle() {
        this.router.navigate(['battle?player_1=' + this.item?.id]);
    }


}