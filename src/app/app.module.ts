import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [ //Los módulos siempre se importan en los import
    BrowserModule,
    AppRoutingModule,
    CounterModule //Si este módulo tiene muchos componentes, ahorro código aquí ya que sólo importo el módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
