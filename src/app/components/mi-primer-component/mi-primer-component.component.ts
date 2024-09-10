import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-primer-component',
  standalone: true,
  imports: [],
  templateUrl: './mi-primer-component.component.html',
  styleUrl: './mi-primer-component.component.css'
})
export class MiPrimerComponentComponent {

  public contador: number = 5;

  aumentar(value: number) {
    this.contador += value
  }

  reset() {
    this.contador = 10
  }

}
