import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  navbarUP = 'Editar Información';
  usuarioForm: FormGroup;
  titulo ='Registrate, que esperas!';
  id: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute
    ) {
    this.usuarioForm = this.fb.group({
      
  }) 
  this.id = this.aRouter.snapshot.paramMap.get('id');
}

  ngOnInit(): void {
    
  }
  
  esInicio(){
    if(this.id !== null){
      this._usuarioService.obtenerUsuario(this.id).subscribe(data =>{
        this.usuarioForm.setValue({
          dni: data.dni,
          nombre:data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          nacimiento: data.nacimiento,
          facultad: data.facultad,
          carrera: data.carrera,
          cuenta: data.cuenta,
          rol:data.rol,
          correo: data.correo,
          password: data.password
        })
      })
    }
  }
}
