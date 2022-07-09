import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActividadService } from '../../services/actividad.service';
import { ActividadInterface } from '../../models/actividad';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad-nueva',
  templateUrl: './actividad-nueva.component.html',
  styleUrls: ['./actividad-nueva.component.css'],
})
export class ActividadNuevaComponent {
  form = this.fb.group({
    nombre: ['', [Validators.required]],
    area: ['', [Validators.required]],
    horasArt: [, [Validators.required]],
    descripcion: ['', [Validators.required]],
    modalidad: ['', [Validators.required]],
    direccionPlataforma: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
    facultad: ['', [Validators.required]],
    encargados: ['', [Validators.required]],
    urlImagen: ['', [Validators.required]],
    terminos: [, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private actividadSrv: ActividadService,
    private router: Router
  ) {}

  submit() {
    const actividad = this.form.getRawValue();
    this.actividadSrv.postActividades(actividad).subscribe((resp) => {
      if (resp) {
        Swal.fire(
          'Listo!',
          'Actividad creada satisfactoriamente!',
          'success'
        ).then((result) => {
          this.form.reset();
          // this.router.navigateByUrl('/');
        });
      }
      if (!resp) {
        Swal.fire('Algo salio mal!', 'No se pudo crear la actividad!', 'error');
      }
    });
  }

  onFileChange(e: Event | any) {
    const imagen = new FormData();
    try {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        imagen.append('image', file);
        this.actividadSrv.postImagen(imagen).subscribe((url) => {
          this.form.patchValue({
            urlImagen: url,
          });
        });
      }
    } catch (error) {
      console.log('error');
    }
  }
  sendActividad() {}
}
