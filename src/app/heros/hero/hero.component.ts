import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  
  public age: number = 40;

  get capitalizedName(): string{
    return this.name.toUpperCase()
  }
   get heroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{
    this.name = 'spiderman'
  }
  changeAge():void {
     this.age = 20
  }
  resetForm() {
    this.name = 'ironman';
    this.age = 40;
    document.querySelectorAll('h1')!.forEach(titulo => {
      titulo.innerHTML = '<h1>que dicen las perris</h1>'
    })
  }

}
