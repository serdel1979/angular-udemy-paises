import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }


  get httpParams() {
    return new HttpParams()
      .set('field', 'name')
      .set('field', 'capital')
      .set('field', 'population')
      .set('field', 'flags')
      .set('field', 'cca2');
  }

  buscarPais(paisBuscado: string): Observable<PaisResponse[]> {
    const url = `${this.apiUrl}/name/${paisBuscado}`;
    return this.http.get<PaisResponse[]>(url, { params:this.httpParams });
  }

  buscarPaisPorCapital(capitalBuscado: string): Observable<PaisResponse[]> {
    const url = `${this.apiUrl}/capital/${capitalBuscado}`;
    return this.http.get<PaisResponse[]>(url, { params:this.httpParams });
  }

  verPaisDetalle(id: string): Observable<PaisResponse[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisResponse[]>(url, { params:this.httpParams });
  }

  buscarPaisesPorRegion(region: string): Observable<PaisResponse[]> {
    //configuro parametros
    // paramsHttp: new HttpParams().set('fields','paises[0].flags;name.common;population');

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<PaisResponse[]>(url, { params:this.httpParams })
      .pipe(
        tap(console.log)
      )
  }



}
