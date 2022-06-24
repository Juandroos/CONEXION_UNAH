import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'registrar-usuario',component: RegistrarUsuarioComponent},
  { path: 'editar-usuario/:id', component:RegistrarUsuarioComponent},
  { path: 'login', component:LoginComponent},
  { path: 'landing-page', component:LandingPageComponent},
  { path: '**', redirectTo:'', pathMatch: 'full'}//DEBE SER SIEMPRE LA ULTIMA

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
