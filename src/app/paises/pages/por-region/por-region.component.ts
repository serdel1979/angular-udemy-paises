import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{


  paisBuscado: string="";
  placeholder: string="Buscar por región"
  paises: PaisResponse[] = [];
  hayError: boolean = false;

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string="";
  constructor(private paisesService: PaisService) { }

  activarRegion(region: string){
    if (region === this.regionActiva){return}
    this.regionActiva = region;
    this.paises = []
    this.paisesService.buscarPaisesPorRegion(this.regionActiva).subscribe(
      
    )
    this.paisesService.buscarPaisesPorRegion(this.regionActiva).subscribe(paises=>{
      console.log(paises);
      this.paises = paises;
    },(err=>{
      this.hayError = true;
      this.paises = [];
    }));
  }

}
