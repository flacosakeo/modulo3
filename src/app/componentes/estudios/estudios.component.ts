import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {
nombre:string="Eduardo Rubén Lazarte"
titulo:string="Analista en Sistemas de Computación"
fullstackjr:string="Desarrollador Web FullStack Jr."


  mostrar: boolean= false;
  mensaje_enlace: string= '+'
  mostrar_mas: string='Mostrar Más'

  mostrarOcultar(){
    if (this.mostrar){
      this.mostrar=false
      this.mensaje_enlace='+'
      this.mostrar_mas='Mostrar Más'
    }else{
      this.mostrar=true
      this.mensaje_enlace='-'
      this.mostrar_mas='Mostrar Menos'
    }
  }
}
