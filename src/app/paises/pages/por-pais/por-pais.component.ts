import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  paisBuscado: string="";
  placeholder: string="Buscar por país"
  paises: PaisResponse[] = [];
  hayError: boolean = false;
  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(paisBuscado: string){
    this.paisBuscado = paisBuscado;
    this.hayError=false;
    this.paisService.buscarPais(this.paisBuscado).subscribe(paises=>{
      this.paises = paises;
      console.log(this.paises);
    },(err=>{
      this.hayError = true;
      this.paises = [];
    }));
  }

  sugerencias(paisBuscado: string){
    this.hayError=false;
  }

}
