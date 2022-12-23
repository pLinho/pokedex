import { ModuleWithProviders, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PokedexService } from "./services/pokedex.service";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        PokedexService,
    ]
})
export class PokedexApiModule {
    static forRoot(config: {
        endpoint: string,
    }): ModuleWithProviders<PokedexApiModule> {
        return {
            ngModule: PokedexApiModule,
            providers: [
                { provide: 'API_ENDPOINT', useValue: config.endpoint }
            ]
        }
    }
}