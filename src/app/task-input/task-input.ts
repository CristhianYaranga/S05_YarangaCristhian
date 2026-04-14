import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  standalone: false,
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  @Output() tareaAgregada = new EventEmitter<string>();
  mensajeError = '';

  agregarTarea(input: HTMLInputElement): void {
    const tarea = input.value.trim();

    if (!tarea) {
      this.mensajeError = 'La tarea no puede estar vacia';
      return;
    }

    this.mensajeError = '';
    this.tareaAgregada.emit(tarea);
    input.value = '';
  }
}
