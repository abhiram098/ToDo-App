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
    var newText = this.todoText;
    if (newText.length < 1)
      alert('Please enter a task to submit');
    else {
      this.todos.push({
        text: newText,
      });
      this.count++;
      this.todoText = '';
    }
  }

  clearInput() {
    (<HTMLInputElement>document.getElementById('newTodo')).value = '';

  }

  alertTodo(todo) {
    if(confirm('Are you sure you are done with the task?')== true)
      this.removeTodo(todo);
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.count--;
  }
}
