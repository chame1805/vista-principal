import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { AutentificacionService } from '../../service/autentificacion.service';
import { Registro } from '../interface/registro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private authService: AutentificacionService, private router: Router) {}

  validar() {
    const datosGuardados: Registro | null = this.authService.obtenerInfo();

    console.log('Datos guardados:', datosGuardados);
    console.log('Correo ingresado:', this.correo);
    console.log('Password ingresado:', this.password);

    if (
      datosGuardados &&
      datosGuardados.correo?.trim() === this.correo.trim() &&
      datosGuardados.password?.trim() === this.password.trim()
    ) {
      this.mensaje = 'Inicio de sesión exitoso';
      this.router.navigate(['/rutas']);
    } else {
      this.mensaje = 'Correo o contraseña incorrectos';
    }
  }
}
