import { Component, OnInit } from '@angular/core';
import { ActividadInterface } from '../../models/actividad';
import { ActividadService } from '../../services/actividad.service';



@Component({
  selector: 'app-inicio-voae',
  templateUrl: './inicio-voae.component.html',
  styleUrls: ['./inicio-voae.component.css'],

})
export class InicioVoaeComponent implements OnInit {

  listActividad: ActividadInterface[]=[];

  constructor(
    private _actividadService: ActividadService
    ) { }

  ngOnInit(): void {
    this.ObtenerActividad();
  }

  ObtenerActividad(){
    this._actividadService.obtenerActividad().subscribe(data=>{
      console.log(data);
      this.listActividad=data;
    },error=>{
      console.log(error);
    })
  }


}
