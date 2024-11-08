import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroRutaService {
  private info: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  informacion$ = this.info.asObservable();

  private terminalSeleccionada = new BehaviorSubject<string>('');
  terminalSeleccionada$ = this.terminalSeleccionada.asObservable();

  constructor() {}

  // Método para agregar nueva información
  newInfo(nuevo: any): void {
    const valorActual = this.info.getValue();
    const nuevoValor = [...valorActual, nuevo];
    this.info.next(nuevoValor);
    console.log('Información llegada:', nuevoValor);
  }

  // Método para eliminar o editar información
  updateInfo(index: number, nuevoValor: any): void {
    const datos = this.info.getValue();
    if (index >= 0 && index < datos.length) {
      const datosActualizados = [...datos];
      datosActualizados[index] = nuevoValor;
      this.info.next(datosActualizados);
      console.log('Datos actualizados:', datosActualizados);
    } else {
      console.log('Índice no válido, no se pueden editar los datos.');
    }
  }

  // Método para obtener la información actual
  getEnvio(): any[] {
    return this.info.getValue();
  }

  // Método para establecer la terminal seleccionada
  setTerminalSeleccionada(terminal: string): void {
    this.terminalSeleccionada.next(terminal);
  }

  // Método para obtener la terminal seleccionada
  getTerminalSeleccionada(): string {
    return this.terminalSeleccionada.getValue();
  }
}
