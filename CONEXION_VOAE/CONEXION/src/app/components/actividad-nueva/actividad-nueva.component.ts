import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActividadService } from '../../services/actividad.service';

@Component({
  selector: 'app-actividad-nueva',
  templateUrl: './actividad-nueva.component.html',
  styleUrls: ['./actividad-nueva.component.css'],
})
export class ActividadNuevaComponent {
  constructor(private fb: FormBuilder, actividadSrv: ActividadService) {}

  form = this.fb.group({
    nombre: [],
    area: [],
    descripcion: [],
    fecha: [],
    encargados: [],
    imagen: [],
  });
}
