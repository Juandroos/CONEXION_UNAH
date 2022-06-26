import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
<<<<<<< Updated upstream
import { CorreoComponent } from './components/correo/correo.component';
=======
import { CorreoComponent } from './correo/correo.component';//ESTA RUTE DEBE SEGUIR EL FORMATO DE LAS DEMAS! GI
import { InicioComponent } from './components/inicio/inicio.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'inicio', component: LandingPageComponent},
  { path: 'lista-usuarios', component: ListaUsuariosComponent},
  { path: 'registrar-usuario',component: RegistrarUsuarioComponent},
  { path: 'editar-usuario/:id', component:RegistrarUsuarioComponent},
  { path: 'correo',component:CorreoComponent},
  { path: 'login', component:LoginComponent},
  { path: 'landing-page', component:LandingPageComponent},
  { path: '**', redirectTo:'', pathMatch: 'full'}//DEBE SER SIEMPRE LA ULTIMA

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
