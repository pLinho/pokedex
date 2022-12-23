import { Pokemon } from './../models/pokemon';
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IApi } from "../models/api";

@Injectable()
export class PokedexService {
    constructor(
        @Inject('API_ENDPOINT')
        private readonly endpoint: string,
        private readonly http: HttpClient,
    ) {
        http.get<IApi>(endpoint)
            .subscribe(v2 => {

            });
    }
    getPokemon(code: number) {
        return this.http.get<Pokemon>(`${this.endpoint}pokemon/${code}/`);
    }
}