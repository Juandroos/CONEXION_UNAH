import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { ScrollingModule} from '@angular/cdk/scrolling';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { CorreoComponent } from './components/correo/correo.component';
import { ConstanciasInterfazComponent } from './components/constancias-interfaz/constancias-interfaz.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActividadesInterfazComponent } from './components/actividades-interfaz/actividades-interfaz.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { Pag1Component } from './components/pag1/pag1.component';
import { InformacionPersonalComponent } from './components/informacion-personal/informacion-personal.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ActividadNuevaComponent } from './components/actividad-nueva/actividad-nueva.component';
import { InicioVoaeComponent } from './components/inicio-voae/inicio-voae.component';
import { EditarConstanciaComponent } from './components/editar-constancia/editar-constancia.component';
import { ActividadesVoaeInterfazComponent } from './components/actividades-voae-interfaz/actividades-voae-interfaz.component';
import { ListarConstanciasVOAEComponent } from './components/listar-constancias-voae/listar-constancias-voae.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    ListaUsuariosComponent,
    InicioComponent,
    LandingPageComponent,
    LoginComponent,
    CorreoComponent,
    ConstanciasInterfazComponent,
    ActividadesInterfazComponent,
    CambiarPasswordComponent,
    RecuperarCuentaComponent,
    Pag1Component,
    InformacionPersonalComponent,
    ActividadComponent,
    ActividadNuevaComponent,
    InicioVoaeComponent,
    EditarConstanciaComponent,
    ActividadesVoaeInterfazComponent,
    ListarConstanciasVOAEComponent,
  ],
  imports: [
    FormsModule,
    NgImageSliderModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    BrowserModule,
      ScrollingModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
export class yourSubModule { }
