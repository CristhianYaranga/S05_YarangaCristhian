import { Component, OnInit } from '@angular/core';
import { Tarea, TaskService } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  tareas: Tarea[] = [];

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.tareas = this.taskService.getTareas();
  }

  agregarTarea(tarea: string): void {
    this.taskService.agregarTarea(tarea);
  }

  eliminarTarea(indice: number): void {
    this.taskService.eliminarTarea(indice);
  }

  marcarCompletada(indice: number): void {
    this.taskService.marcarCompletada(indice);
  }
}
