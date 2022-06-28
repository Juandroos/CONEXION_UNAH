import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CorreoComponent } from './components/correo/correo.component';
import { ConstanciasInterfazComponent } from './components/constancias-interfaz/constancias-interfaz.component';


import { ActividadesInterfazComponent } from './components/actividades-interfaz/actividades-interfaz.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';

//ESTA RUTE DEBE SEGUIR EL FORMATO DE LAS DEMAS! GI
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'lista-usuarios', component: ListaUsuariosComponent},
  { path: 'registrar-usuario',component: RegistrarUsuarioComponent},
  { path: 'editar-usuario/:id', component:RegistrarUsuarioComponent},
  { path: 'correo',component:CorreoComponent},
  { path: 'login', component:LoginComponent},
  { path: 'landing-page', component:LandingPageComponent},
  { path: 'constancias-interfaz',component:ConstanciasInterfazComponent},
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },
  { path: 'cambiar-pass', component: CambiarPasswordComponent },
  // Actividades Routes
  { path: 'actividades', component: ActividadesInterfazComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, //DEBE SER SIEMPRE LA ULTIMA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
