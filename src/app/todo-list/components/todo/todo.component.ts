import { Component, OnInit } from '@angular/core';
import { Todos } from '../../models/todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todos[] = []
  todoId!: number;
  todoTitle: string = '' 

  constructor(private todo: TodoService) { }

  ngOnInit() {

    this.todo.getTodo().valueChanges().subscribe(item => {
      this.todos = item as Todos[]
    })

    this.todoId 
    this.todoTitle = ''
  }

  addTodo(){
    this.todoId = this.todos.length

    if(this.todoTitle.trim().length === 0) return

    this.todo.addTodo({
      id: this.todoId,
      title: this.todoTitle,
      isCompleted: false
    })
    
    this.todoTitle = ''
    this.ngOnInit()
  }

  deleteTodo(id: number){
    this.todo.deleteTodo(id)
  }
}
