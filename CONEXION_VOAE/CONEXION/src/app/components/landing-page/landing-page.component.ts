import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  imgCollection: Array<object> = [
      {
        image: '../assets/img/landin/ajedrez.jpg',
        thumbImage: '../assets/img/landin/ajedrez.jpg',
        alt: '',
        title: 'Campeonato ajedrez'
      }, {
        image: '../assets/img/landin/carrera.webp',
        thumbImage: '../assets/img/landin/carrera.webp',
        title: 'Maraton',
        alt: ''
      }, {
        image: '../assets/img/landin/conferencia.jpg',
        thumbImage: '../assets/img/landin/conferencia.jpg',
        title: 'Conferencia',
        alt: ''
      }, {
        image: '../assets/img/landin/reciclaje.jpg',
        thumbImage: '../assets/img/landin/reciclaje.jpg',
        title: 'conferencia reciclaje',
        alt: ''
      }, {
        image: '../assets/img/landin/mental.png',
        thumbImage: '../assets/img/landin/mental.png',
        title: 'Salud mental',
        alt: ''
      },
      {
        image: '../assets/img/landin/mental.png',
        thumbImage: '../assets/img/landin/mental.png',
        title: 'Salud mental',
        alt: ''
      }
  ];
}
