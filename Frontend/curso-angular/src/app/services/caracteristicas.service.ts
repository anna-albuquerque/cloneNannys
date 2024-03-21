import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caracteristicas } from '../Caracteristicas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasService {

  
  url = 'http://127.0.0.1:8000/api/v1/';

  constructor(private http: HttpClient) { }

  getCaracteristicas(): Observable<Caracteristicas[]> {
    return this.http.get<Caracteristicas[]>(this.url + 'caracteristicas/');
  }
}
