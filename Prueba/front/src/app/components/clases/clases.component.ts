import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']

})
export class ClasesComponent implements OnInit {
  data : any [] = [];
  constructor (private claseService: ClasesService ){}

  ngOnInit(): void {
    this.llenarData();
    
  }
  llenarData(){
    this.claseService.getData().subscribe(data => {
      this.data=data;
      console.log(this.data);

    })
  }
}
