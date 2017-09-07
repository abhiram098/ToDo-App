import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  todoText;
  count = 0;

  constructor() {
    this.todoText = '';
  }

  ngOnInit() {
    this.todos = [
      {text: 'Task 1'},
      {text: 'Task 2'},
      {text: 'Task 3'}
    ];
    this.count = 3;
  }

  addTodo() {
    this.todos.push({
      text: this.todoText,
    });
    this.count++;
  }

  clearInput() {
    (<HTMLInputElement>document.getElementById('newTodo')).value = '';

  }

  alertTodo() {
    alert('Are you sure?');
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.count--;
  }
}
