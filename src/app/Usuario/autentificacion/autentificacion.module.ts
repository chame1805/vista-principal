import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HInicioComponent } from '../../h-inicio/h-inicio.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { CardHorarioComponent } from '../card-horario/card-horario.component';
import { ReservaComponent } from '../reserva/reserva.component';
import { HeaderComponent } from '../header/header.component';
import { PagoComponent } from '../../pago/pago.component';


@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    HInicioComponent,
    HorariosComponent,
    CardHorarioComponent,
    ReservaComponent,
    HeaderComponent,
    PagoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    
    LoginComponent,
    HInicioComponent
  ]
})
export class AutentificacionModule { }
