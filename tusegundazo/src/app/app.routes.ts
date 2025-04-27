import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'vehiculos',
        loadChildren: () =>
          import('./vehiculos/vehiculos.module').then((m) => m.VehiculosModule),
      },
      {
        path: '',
        redirectTo: '/vehiculos',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/vehiculos',
      },
];
