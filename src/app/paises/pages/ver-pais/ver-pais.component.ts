import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: PaisResponse[];

  constructor(private activateRoute: ActivatedRoute, private paisesService: PaisService) { }

  ngOnInit(): void {

    // this.activateRoute.params.subscribe(params=>{
    //   const {id} = params
    //   console.log(id);
    //   this.paisesService.verPaisDetalle(id).subscribe(res=>{
    //     this.pais = res[0];
    //     console.log(this.pais);
    //   })
    // })
    this.activateRoute.params
    .pipe(
      switchMap(({id})=>this.paisesService.verPaisDetalle(id)),
      tap()
    )
    .subscribe(pais=>{
      this.pais = pais;
    })

  }

}
