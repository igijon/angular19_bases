import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable(
  {
    providedIn: 'root' //Va a hacer un singleton en toda la aplicación
  }
)
export class DbzService {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
    },{
      name: 'Goku',
      power: 9500
    }, {
      name: 'Vegeta',
      power: 7500
    }];

  onNewCharacter(character: Character): void
  {
    this.characters.unshift(character); //Lo inserta al principio
    //this.characters.push(character);
  }

  onDeleteCharacter( index: number ) {
    this.characters.splice(index, 1);
  }

}
