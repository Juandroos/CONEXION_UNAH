import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//prueba
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
import { Pag1Component } from './components/pag1/pag1.component';

//ESTA RUTE DEBE SEGUIR EL FORMATO DE LAS DEMAS! GI
import { InicioComponent } from './components/inicio/inicio.component';
import { Pag2Component } from './components/pag2/pag2.component';
import { Pag3Component } from './components/pag3/pag3.component';
import { Pag4Component } from './components/pag4/pag4.component';
import { Pag5Component } from './components/pag5/pag5.component';
import { InformacionPersonalComponent } from './components/informacion-personal/informacion-personal.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ActividadNuevaComponent } from './components/actividad-nueva/actividad-nueva.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'lista-usuarios', component: ListaUsuariosComponent},
  { path: 'registrar-usuario',component: RegistrarUsuarioComponent},
  { path: 'editar-usuario/:id', component:RegistrarUsuarioComponent},
  { path: 'correo',component:CorreoComponent},
  { path: 'login', component:LoginComponent},
  { path: 'landing-page', component:LandingPageComponent},
  { path: 'constancias-interfaz',component:ConstanciasInterfazComponent},
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },
  { path: 'cambiar-password', component: CambiarPasswordComponent },
  { path: 'informacion-personal', component: InformacionPersonalComponent},
  { path: 'pag1', component: Pag1Component},
  { path: 'pag2', component: Pag2Component},
  { path: 'pag3', component: Pag3Component},
  { path: 'pag4', component: Pag4Component},
  { path: 'pag5', component: Pag5Component},
  // Actividades Routes
  { path: 'actividades-interfaz', component: ActividadesInterfazComponent },
  { path: 'actividad', component: ActividadComponent },
  { path: 'actividad-nueva', component: ActividadNuevaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, //DEBE SER SIEMPRE LA ULTIMA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
