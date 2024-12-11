import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [ //Lo que mi módulo conoce
    CounterComponent
  ],
  exports: [ //Lo que expongo al resto de la aplicación
    CounterComponent
  ]
})
export class CounterModule {

}
