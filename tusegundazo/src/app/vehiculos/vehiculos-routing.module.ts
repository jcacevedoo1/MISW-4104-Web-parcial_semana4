import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListarVehiculosComponent } from "./listar-vehiculos/listar-vehiculos.component";

const routes: Routes = [
    {
      path: '',
      component: ListarVehiculosComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class VehiculosRoutingModule {}