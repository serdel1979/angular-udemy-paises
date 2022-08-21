import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1'; 

  constructor(private http: HttpClient) { }

  buscarPais( paisBuscado: string): Observable<PaisResponse[]> {
    const url =`${this.apiUrl}/name/${paisBuscado}`;
    return this.http.get<PaisResponse[]>(url);
  }

  buscarPaisPorCapital( capitalBuscado: string): Observable<PaisResponse[]> {
    const url =`${this.apiUrl}/capital/${capitalBuscado}`;
    return this.http.get<PaisResponse[]>(url);
  }

  verPaisDetalle( id: string): Observable<PaisResponse[]> {
    const url =`${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisResponse[]>(url);
  }



}
