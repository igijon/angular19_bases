import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; //Necesario por ejemplo para directivas ngIf, ngFor..

import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";

@NgModule({
  declarations: [ //Lo que mi módulo conoce
    HeroComponent,
    ListComponent
  ],
  exports: [ //Lo que expongo al resto de la aplicación
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}
