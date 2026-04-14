import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tareas: Tarea[] = [];
  @Output() tareaEliminada = new EventEmitter<number>();
  @Output() tareaCompletada = new EventEmitter<number>();

  eliminar(indice: number): void {
    this.tareaEliminada.emit(indice);
  }

  completar(indice: number): void {
    this.tareaCompletada.emit(indice);
  }
}
