import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks: { name: string; completed: boolean }[] = [];
  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
  }

  toggleTask(task: { name: string; completed: boolean }) {
    task.completed = !task.completed;
  }
}
