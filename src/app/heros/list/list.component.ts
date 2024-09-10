import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['hulk', 'shehulk', 'thor', 'captain america', 'captain marvel']
  heroesborrados?: string;

  removeLastHero(): void{
    this.heroesborrados = this.heroNames.pop();
    console.log(this.heroesborrados);
    
    
  }

}
