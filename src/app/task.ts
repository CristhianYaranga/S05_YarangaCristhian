import { Injectable } from '@angular/core';

export interface Tarea {
  texto: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tareas: Tarea[] = [
    { texto: 'Barrer la cocina', completada: false },
    { texto: 'Lavar la ropa', completada: false },
    { texto: 'Sacar la basura', completada: false },
  ];

  getTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(tarea: string): void {
    if (!tarea.trim()) {
      return;
    }

    this.tareas.push({ texto: tarea.trim(), completada: false });
  }

  eliminarTarea(indice: number): void {
    this.tareas.splice(indice, 1);
  }

  marcarCompletada(indice: number): void {
    const tarea = this.tareas[indice];

    if (!tarea) {
      return;
    }

    tarea.completada = !tarea.completada;
  }
}
