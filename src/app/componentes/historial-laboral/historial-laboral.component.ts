import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-laboral',
  templateUrl: './historial-laboral.component.html',
  styleUrls: ['./historial-laboral.component.css']
})
export class HistorialLaboralComponent {
  /* esta es la funcion que cambia el estado de la variable boleana declarada arriba
  y cambia el texto a variable, la declaracion de variables y la funcion que se desea hacer debe
  estar dentro del 'export class'*/
  
  mostrar: boolean= false; /*variable boleana que sirve de interruptor*/
  mensaje_enlace: string= '+'/*variable que contiene el texto que se mostrara en este caso en el boton*/
  mostrar_mas: string="Mostrar Más"
  
  mostrarOcultar(){
    if (this.mostrar){
      this.mostrar=false
      this.mensaje_enlace='+'
      this.mostrar_mas="Mostrar Más"
    }else{
      this.mostrar=true
      this.mensaje_enlace='-'
      this.mostrar_mas="Mostrar Menos"
    }
  }
}
