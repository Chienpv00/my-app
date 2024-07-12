import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountComponent } from './count/count.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    effect(() => {
      console.log('X:', this.x());
      console.log('Y:', this.y());
    });
  }
  title = 'myapp';
  x = signal(0);
  y = signal(1);
  z = computed(() => this.x() + this.y());

 
}
