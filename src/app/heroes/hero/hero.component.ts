/**ng g c heroes/hero */
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  /**Two way data binding*/
  public name: string = 'ironman';
  public age: number = 45;

  /** Intentaremos hacer One way data binding, que sólo se cambie en
   * una única vía
   */

  //En el futuro lo haremos con un pipe
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }
}
