import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {

  @Input() public characterList: Character[] = [{
    name: 'trunks',
    power:10
  }]

  @Output() deleteCharacter : EventEmitter<string> = new EventEmitter()

  onDelete(id?: string):void {
    if (!id) return;
    console.log({ id });
    this.deleteCharacter.emit(id)
    
  }

}
