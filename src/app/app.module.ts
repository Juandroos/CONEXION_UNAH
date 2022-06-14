import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';



@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    RegistrarUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppComponent

  ],

  providers: [
  
>>>>>>> f656aadbe10cae8e639b2d6e4bc61c39385eee4d
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
