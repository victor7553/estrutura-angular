import { Routes } from '@angular/router';
import { HomeComponent } from './sreens/home/home.component';

export const routes: Routes = [
    {path: '',
    component: HomeComponent
    },
    {path: 'contador',
    loadComponent: () => import('./sreens/contador/contador.component').then(c => c.ContadorComponent)
    },
    {path: 'tarefas',
    loadComponent: () => import('./sreens/tarefas/tarefas.component').then(t => t.TarefasComponent)
    },
    {path: 'todos',
    loadComponent: () => import('./sreens/todos/todos.component').then(t => t.TodosComponent)
    }
];
