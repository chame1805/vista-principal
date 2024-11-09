import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrl: './metodo-pago.component.css'
})
export class MetodoPagoComponent {

constructor(private router:Router){}



  navigate(){
    this.router.navigate(['pago'])
  }
}
