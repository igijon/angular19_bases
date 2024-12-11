import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  //Hay un binding de estas propiedades con el html de mi componente
  public title: string = 'Hola Mundo';
  public counter: number = 10;
}
