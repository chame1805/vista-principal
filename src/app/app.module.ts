import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutentificacionModule } from "./Usuario/autentificacion/autentificacion.module";
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutentificacionModule
],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
