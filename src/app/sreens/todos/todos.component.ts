import { Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/shared/title/title.component';
import { TodosServiceService } from '../../services/todos.service.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  readonly todos = inject(TodosServiceService);

}
