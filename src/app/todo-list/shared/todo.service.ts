import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Todos } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db: AngularFireDatabase) { }

  getTodo() {
    return this.db.list('todos')
  }

  addTodo(todo: Todos) {
    this.db.object('todos/' + todo.id).set(todo)
  }

  deleteTodo(id: number) {
    this.db.object('todos/' + id).remove()
  }
}
