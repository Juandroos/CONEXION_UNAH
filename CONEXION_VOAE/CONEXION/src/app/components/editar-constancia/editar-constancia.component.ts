import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constancia } from 'src/app/models/constancia';
import { ConstanciasService } from 'src/app/services/constancia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-constancia',
  templateUrl: './editar-constancia.component.html',
  styleUrls: ['./editar-constancia.component.css']
})
export class EditarConstanciaComponent implements OnInit {
  constanciaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private constanciaService:ConstanciasService) { 
    this.constanciaForm = this.fb.group({
      nombre: ['', Validators.required],
      carrera: ['',Validators.required],
      cuenta: ['', Validators.required],
      actividad: ['', Validators.required],
      horas: ['', Validators.required],
      ambito: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  editarConstancia(){

    const CONSTANCIA: Constancia = {
      nombre: this.constanciaForm.get('nombre')?.value,
      carrera: this.constanciaForm.get('carrera')?.value,
      cuenta: this.constanciaForm.get('cuenta')?.value,
      actividad: this.constanciaForm.get('actividad')?.value,
      horas: this.constanciaForm.get('horas')?.value,
      ambito: this.constanciaForm.get('ambito')?.value,
    }
    console.log(CONSTANCIA); 
    this.constanciaService.guardarConstancias(CONSTANCIA).subscribe(data=>{

      if (data) {
        Swal.fire(
          'Constancia Editada Correctamente'
        ).then((result) => {
          this.constanciaForm.reset();
        });
      }

    }
      
      )
  }
}



