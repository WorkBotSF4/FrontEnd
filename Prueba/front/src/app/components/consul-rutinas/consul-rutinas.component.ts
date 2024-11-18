import { Component, OnInit } from '@angular/core';
import { ConsulRutinasService } from 'src/app/services/consultarrutinas.service';

@Component({
  selector: 'app-consul-rutinas',
  templateUrl: './consul-rutinas.component.html',
  styleUrls: ['./consul-rutinas.component.css']
})
export class ConsulRutinasComponent implements OnInit {
  data : any [] = [];
  constructor (private rutinasService: ConsulRutinasService ){}

  ngOnInit(): void {
    this.llenarData();
    
  }
  llenarData(){
    this.rutinasService.getData().subscribe(data => {
      this.data=data;
      console.log(this.data);

    })
  }
}