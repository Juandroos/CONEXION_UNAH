import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css'],
})
export class CambiarPasswordComponent implements OnInit {
  
  idUsuario = '62a8e8901d025fb72b51db08';

  changePass = this.fb.group({
    tempPass: ['', [Validators.min(5)]],
    nuevaPass: ['', [Validators.min(5)]],
    confirmarPass: ['', [Validators.min(5)]],
  });
  constructor(
    private fb: FormBuilder,
    private usuarioSrv: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendPass() {
    const { confirmarPass, nuevaPass, tempPass } =
      this.changePass.getRawValue();

    if (confirmarPass !== nuevaPass) {
      console.log('Contrasena incorrecta');
      return;
    }

    this.usuarioSrv
      .cambiarPassword(this.idUsuario, tempPass!, nuevaPass!)
      .subscribe((resp) => {
        console.log(resp);
      });
    console.log(this.changePass.getRawValue());
    this.router.navigateByUrl('/login');
  }
}
