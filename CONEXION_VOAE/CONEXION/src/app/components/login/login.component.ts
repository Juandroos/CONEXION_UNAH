import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

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

  constructor(
    private usuarioSrv: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginSubmit() {
    const { email, password } = this.form.getRawValue();
    this.usuarioSrv
      .obtenerUsuarioCorreo(email!, password!)
      .subscribe((resp) => {
        this.validarCambioContrasena(resp);
      });
  }

  validarCambioContrasena(usuario: any) {
    const { cambiarPassword, _id } = usuario;

    if (!cambiarPassword) return;

    localStorage.setItem('id', _id);
    this.router.navigateByUrl('/cambiar-password');
  }
}
