import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

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
