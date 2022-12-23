import { Pokemon } from './../../../api/models/pokemon';
import { PokedexService } from './../../../api/services/pokedex.service';
import { Component } from "@angular/core";


@Component({
    selector: 'ci-list',
    templateUrl: 'list.component.html',
    styleUrls: [
        'list.component.scss'
    ]
})
export class ListComponent {
    pokemons?: Pokemon[];
    constructor(
        private readonly pokedex: PokedexService,
    ) {
        this.pokemons = (Array(653)).fill(null).map((a, i) => {
            const pokemon: Pokemon = { id: i + 1 };
            this.pokedex.pokemon(i + 1).subscribe(p => {
                Object.assign(pokemon, p);


            })



            return pokemon;
        });

        if ("speechSynthesis" in window) {
            console.log("API DISPONIVEL");
        } else {
            console.log("API NAO DISPONIVEL");
        }
    }

    read(item: Pokemon) {
        var mensagem = new SpeechSynthesisUtterance();
        mensagem.text = item.name || '';
        speechSynthesis.speak(mensagem);
    }
}