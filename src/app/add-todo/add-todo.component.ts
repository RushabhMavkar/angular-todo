import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;

  @Output() TodoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  FormTodoSubmit() {
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.TodoAdd.emit(todo);
  }
}
