import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent  } from './components/shared/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-page';
}
