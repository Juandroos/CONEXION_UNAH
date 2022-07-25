import { Component, OnInit } from '@angular/core';
import { Constancia } from 'src/app/models/constancia';
import { ConstanciasService } from 'src/app/services/constancia.service';

@Component({
  selector: 'app-listar-constancias-voae',
  templateUrl: './listar-constancias-voae.component.html',
  styleUrls: ['./listar-constancias-voae.component.css']
})
export class ListarConstanciasVOAEComponent implements OnInit {
  listConstancias: Constancia[] = [];

  constructor(private _constanciaService: ConstanciasService) { }

  ngOnInit(): void {
    this.obtenerConstancias();
  }

  obtenerConstancias(){
    this._constanciaService.getConstancias().subscribe(data =>{
      console.log(data);
      this.listConstancias = data;
    },error =>{
      console.log(error);
    })
  }

}
