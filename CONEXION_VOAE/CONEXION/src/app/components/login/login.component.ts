import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ['', []],
    password: ['', []],
  });

  public user:any={}
  public usuario: any={}
  public token: any='';

  constructor(
    private usuarioSrv: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.token= this.usuarioSrv.getToken();
  }

  ngOnInit(): void {
    if(this.token){
      this.router.navigate(['/']);
    }else{
      
    }
  }

  loginSubmit() {
    const { email, password } = this.form.getRawValue();
    this.usuarioSrv
      .obtenerUsuarioCorreo(email!, password!)
      .subscribe((resp) => {
        this.validarCambioContrasena(resp);
      });
  }

  loginF(loginForm:any){
    if(loginForm.valid){
      let data={
        correo: this.user.correo,
        password: this.user.password
      }
      this.usuarioSrv.login_usuario(data).subscribe(resp=>{
        if(resp.data==undefined){
          Swal.fire('¡UPS!',resp.message,'error');
        }else{
          this.usuario=resp.nombre;
          localStorage.setItem('token', resp.token);
          localStorage.setItem('_id', resp.id);
          Swal.fire('¡HOLA!','Bienvenido, '+resp.nombre, 'success');
          this.router.navigate(['/inicio']);
        }
      },error =>{
        console.log(error);
      });
      
    }else{
      Swal.fire('Los datos del formulario no son correctos', 'error');
    }
  }

  validarCambioContrasena(usuario: any) {
    const { cambiarPassword, _id } = usuario;

    if (!cambiarPassword) return;

    localStorage.setItem('id', _id);
    this.router.navigateByUrl('/cambiar-password');
  }
}
