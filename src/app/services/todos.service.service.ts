import { effect, Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.enity';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  private readonly _items = signal<Array<Todo>>([]);

  readonly items = this._items.asReadonly();

  constructor () {
    this._load();

    effect(() => {
      const items = this._items();
      localStorage.setItem('todos', JSON.stringify(items));
    });
  }

  add(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    this._items.update((items) => [...items, newTodo]);
  }

  toggle(id: string) {
    this._items.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  remove(id: string) {
    this._items.update((items) => items.filter((item) => item.id !== id));
  }

  private _load() {
    const storeTodos = localStorage.getItem('todos');
    if (storeTodos) {
      this._items.set(JSON.parse(storeTodos));
    } else {
      this._items.set([
        { id: crypto.randomUUID(), title: 'Estudar Angular', completed: false },
        { id: crypto.randomUUID(), title: 'Ler um livro', completed: true },
        { id: crypto.randomUUID(), title: 'Fazer exercícios', completed: false,},
      ]);
    }
  }
}
