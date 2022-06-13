import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const appRoutes: Routes=[
	{path:'',component:IndexComponent},
	{path:'index',component:IndexComponent},
	{path:'iniciar-sesion', component:IniciarSesionComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);