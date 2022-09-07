import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HistorialLaboralComponent } from './componentes/historial-laboral/historial-laboral.component';
import { HttpClientModule } from '@angular/common/http';
import { EducacionComponent } from './componentes/educacion/educacion.component'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EstudiosComponent,
    HistorialLaboralComponent,
    EducacionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
