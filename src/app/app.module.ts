import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutentificacionModule } from './Usuario/autentificacion/autentificacion.module';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './Usuario/header/header.component';
import { PagoComponent } from './pago/pago.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  
  
  
  
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
