import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importanto componentes

import { HomeComponent } from './home/home.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoggedComponent } from './logged/logged.component';
import { TaskComponent } from './task/task.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'navegacion', component: NavegacionComponent},
    {path: 'logged', component: LoggedComponent},
    {path: 'task', component:TaskComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
// Le decimos que array de rutas debe de cargar para que las inyecte en las rutas del framwork. 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);