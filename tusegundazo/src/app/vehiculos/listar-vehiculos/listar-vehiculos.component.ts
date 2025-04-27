import { Component } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';

interface MarcaTotal {
  marca: string;
  total: number;
}

@Component({
  standalone: false,
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrl: './listar-vehiculos.component.css'
})
export class ListarVehiculosComponent {
  vehiculos: Vehiculo[] = [];
  totalPorMarca: MarcaTotal[] = [];

  constructor(private vehiculosService: VehiculosService) {
    this.vehiculosService.getVehiculos().subscribe((vehiculos: Vehiculo[]) => {
      this.vehiculos = vehiculos;
      this.calcularTotalPorMarca();
    });
  }

  calcularTotalPorMarca() {
    const marcaSet = new Set<string>();
    const marcaCount = new Map<string, number>();

    this.vehiculos.forEach(vehiculo => {
      marcaSet.add(vehiculo.marca);
      marcaCount.set(vehiculo.marca, (marcaCount.get(vehiculo.marca) || 0) + 1);
    });

    this.totalPorMarca = Array.from(marcaSet).map(marca => ({
      marca,
      total: marcaCount.get(marca) || 0
    }));
  }
}
