import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';

@NgModule({
  declarations: [
    ListarVehiculosComponent
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
