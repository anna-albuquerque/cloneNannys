import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caracteristicas } from '../Caracteristicas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasService {

  
  url = 'https://annacarolinneam.pythonanywhere.com/api/v1/';

  constructor(private http: HttpClient) { }

  getCaracteristicas(): Observable<Caracteristicas[]> {
    return this.http.get<Caracteristicas[]>(this.url + 'caracteristicas/');
  }
}
