import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  ejercicioForm:   
 FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl(''),   

    series: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
    // No need for initialization here, as it's already done in the constructor
  }

  onSubmit() {
    // Aquí puedes enviar los datos del formulario a tu backend
    console.log(this.ejercicioForm.value);
  }
}