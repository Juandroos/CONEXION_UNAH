import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades-interfaz',
  templateUrl: './actividades-interfaz.component.html',
  styleUrls: ['./actividades-interfaz.component.css'],
})
export class ActividadesInterfazComponent implements OnInit {
  actividades = [
    {
      nombreActividad: 'FORO DE SEGURIDAD',
      fecha: '01-05-2022',
      carrera: 'ING. EN SISTEMAS',
      horas: 10,
      descripcion: 'Esto trata sobre',
      catedratico: 'Ing. Gorka',
    },
    {
      nombreActividad: 'FORO DE IDIOMAS',
      fecha: '01-05-2022',
      carrera: 'LENGUAS EXTRA.',
      horas: 10,
      descripcion: 'Esto trata sobre',
      catedratico: 'Lic. Olimpia',
    },
    {
      nombreActividad: 'FORO DE MERCADEO',
      fecha: '01-05-2022',
      carrera: 'MERCADOTECNIA',
      horas: 10,
      descripcion: 'Esto trata sobre',
      catedratico: 'Ing. Gorka',
    },
    {
      nombreActividad: 'FORO DE FISICA',
      fecha: '01-05-2022',
      carrera: 'FISICA',
      horas: 10,
      descripcion: 'Esto trata sobre',
      catedratico: 'Lic. Carcamo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
