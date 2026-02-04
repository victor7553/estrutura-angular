import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../components/shared/title/title.component';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  count = signal(0);

  increment() {
    this.count.update((n) => n + 1 );
  }

  decrement() {
    this.count.update((n) => n - 1 );
  }

  reset() {
    this.count.set(0);
  }
}
