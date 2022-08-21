import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {


  paisBuscado: string="";
  placeholder: string="Buscar por capital"
  paises: PaisResponse[] = [];
  hayError: boolean = false;
  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(paisBuscado: string){
    this.paisBuscado = paisBuscado;
    this.hayError=false;
    this.paisService.buscarPaisPorCapital(this.paisBuscado).subscribe(paises=>{
      this.paises = paises;
      console.log(this.paises);
    },(err=>{
      this.hayError = true;
      this.paises = [];
    }));
  }

 

}
