import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.enity';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  private readonly _items = signal<Array<Todo>>([
    {id: crypto.randomUUID(), title: 'Estudar Angular', completed: false},
    {id: crypto.randomUUID(), title: 'Ler um livro', completed: true},
    {id: crypto.randomUUID(), title: 'Fazer exercícios', completed: false},
  ]);
 
  readonly items = this._items.asReadonly();

  toggle(id: string) {
    this._items.update( (items) =>
      items.map( item => item.id === id ? {...item, completed: !item.completed} : item)
    );
  }
}
