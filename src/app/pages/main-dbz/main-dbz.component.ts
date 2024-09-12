import { Character } from './../../interfaces/Character.interface';
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { AddCharacterComponent } from '../../components/add-character/add-character.component';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-main-dbz',
  standalone: true,
  imports: [CharacterListComponent,AddCharacterComponent],
  templateUrl: './main-dbz.component.html',
  styleUrl: './main-dbz.component.css'
})
export class MainDbzComponent {

/*   public characters: Character[] = [{
    name: 'krilin',
    power:1000
  }, {
    name: 'goku',
    power:9500
    }, {
      name: 'vegeta',
      power:7500
    }]
  
  ngOnInit() {
    this.characters = JSON.parse(localStorage.getItem("personajes") || '""') 
    
    
    }
  
  onNewCharacter(personaje: Character): void{
    this.characters.push(personaje)
    localStorage.setItem('personajes', JSON.stringify(this.characters))
    console.log(this.characters);
    
    
  }

  personajeBorrado(index:number) {
    console.log('index borrado ', index);
    const borrado = this.characters.splice(index, 1)
    console.log(borrado);
    localStorage.setItem('personajes', JSON.stringify(this.characters))
    
    
  } */
 /*  characters: Character[] = []
  
  ngOnInit() {
    this.characters = JSON.parse(localStorage.getItem("personajes") || '""')


  } */
  
  
      personajes : Character[]=[]
      dbzService = inject(CharactersService)
  
  get characters(): Character[]{
    return [...this.dbzService.characters]  //usamos spread para q cree una copia de lo q tenemos ahi
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteById(id)
    localStorage.setItem('personajes', JSON.stringify(this.dbzService.characters))
  }

  nuevoCharacter(character: Character): void{
    this.dbzService.onNewCharacter(character)
   

  }
  ngOnInit() {
    this.personajes = JSON.parse(localStorage.getItem("personajes") || '""')
    console.log('new', this.personajes);
    this.dbzService.characters = this.personajes
   
    
   
    

  }

}
