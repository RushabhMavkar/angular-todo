import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() TodoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() TodoDone: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ItemDelete(todo: Todo) {
    this.TodoDelete.emit(todo);
    console.log('delete');
  }

  MarkAsDone(todo: Todo) {
    console.log(todo);
    this.TodoDone.emit(todo);
  }
}
