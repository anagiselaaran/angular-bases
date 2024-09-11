import { HeroComponent } from './heros/hero/hero.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPrimerComponentComponent } from './components/mi-primer-component/mi-primer-component.component';
import { ListComponent } from './heros/list/list.component';
import { MainDbzComponent } from './pages/main-dbz/main-dbz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MiPrimerComponentComponent,HeroComponent,ListComponent,MainDbzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = 'mi Primera App';
  public contador: number = 5;

  aumentar(value:number) {
    this.contador += value
  }
  
  reset() {
    this.contador = 10
  }
  
  
}
