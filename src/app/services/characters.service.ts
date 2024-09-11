import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from 'uuid'



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public characters: Character[] = [{
    id:uuid(),
    name: 'krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'goku',
    power: 9500
    }, {
    id: uuid(),
    name: 'vegeta',
    power: 7500
  }]

  

  onNewCharacter(personaje: Character): void {
    const nuevoPersonaje: Character = { id: uuid(), ...personaje } 
      /* Ó
      name: personaje.name,
      power: personaje.power
    } */
    this.characters.push(nuevoPersonaje)
    localStorage.setItem('personajes', JSON.stringify(this.characters))
    console.log(this.characters);


  }
  deleteById(id: string) {
    const result = this.characters.filter(character => character.id !== id)
    console.log(result);
    this.characters = result
    
  }

/*   personajeBorrado(index: number) {
    console.log('index borrado ', index);
    const borrado = this.characters.splice(index, 1)
    console.log(borrado);
    localStorage.setItem('personajes', JSON.stringify(this.characters))


  } */
}
