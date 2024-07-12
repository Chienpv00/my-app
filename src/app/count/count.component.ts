import { Component, input } from '@angular/core';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  count = input(0, {
    alias: 'counter',
    transform: (x: number) => x * 2,
  });
}
