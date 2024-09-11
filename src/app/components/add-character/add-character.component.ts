import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-character',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output() newCharacter : EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power:0
  }

  emitCharacter(): void {
    console.log('add', this.character);
    
    if (this.character.name.length === 0) return;
   
    this.newCharacter.emit({...this.character})

    this.character.name = '';
    this.character.power = 0;
  }

}
