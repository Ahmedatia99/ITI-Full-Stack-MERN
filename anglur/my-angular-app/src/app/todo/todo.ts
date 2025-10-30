import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class TodoComponent {
  todos = signal<Todo[]>([]);
  newTask = signal('');
  search = signal('');
  searchedTodos = signal<Todo[]>([]);
  remaining = signal(0);

  constructor() {
    effect(() => {
      const value = this.todos().filter(t => !t.done).length;
      this.remaining.set(value);
    });

    effect(() => {
      const q = this.search().toLowerCase().trim();
      const filtered = this.todos().filter(t => t.title.toLowerCase().includes(q));
      this.searchedTodos.set(filtered);
    });
  }

  addTask() {
    const title = this.newTask().trim();
    if (!title) return;
    this.todos.update(list => [
      ...list,
      { id: Date.now(), title, done: false }
    ]);
    this.newTask.set('');
  }

  toggleDone(todo: Todo) {
    this.todos.update(list =>
      list.map(t => (t.id === todo.id ? { ...t, done: !t.done } : t))
    );
  }

  deleteTask(todo: Todo) {
    this.todos.update(list => list.filter(t => t.id !== todo.id));
  }
}
