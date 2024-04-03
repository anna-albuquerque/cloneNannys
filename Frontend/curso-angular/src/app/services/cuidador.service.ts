import { Injectable } from '@angular/core';
import { Cuidador } from '../Cuidador';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Caracteristicas } from '../Caracteristicas';


@Injectable({
  providedIn: 'root'
})
export class CuidadorService {

  url = 'http://127.0.0.1:8000/api/v1/';

  constructor(private http: HttpClient) { }

  createCuidador(cuidador: Cuidador): Observable<Cuidador>{
    console.log('Tutor a ser enviado:', cuidador);
    return this.http.post<Cuidador>(this.url + 'cuidadores/', cuidador);
  }

  getCuidadors(): Observable<Cuidador[]> {
    return this.http.get<Cuidador[]>(this.url + 'cuidadores/');
  }
  getCaracteristicasDoCuidador(cuidadorId: number): Observable<Caracteristicas> {
    const url = `${this.url}${cuidadorId}/caracteristicas`;
    return this.http.get<Caracteristicas>(url);
  }
  getCuidadoresFiltrados(filtros: any): Observable<Cuidador[]> {
    const url = `${this.url}cuidadores-filtrados/`;

    // Converta os filtros em HttpParams
    let params = new HttpParams();
    for (const key in filtros) {
      if (filtros.hasOwnProperty(key)) {
        params = params.set(key, filtros[key]);
      }
    }
    return this.http.get<Cuidador[]>(url, { params: params });
  }
}
