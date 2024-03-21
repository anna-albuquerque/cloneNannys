import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespostaCep } from '../RespostaCep';
import { map } from 'rxjs';

interface Cep{
  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})


export class CepServiceService {

  constructor( private http: HttpClient) { }

  getCEP(cep: Cep): Observable<Cep>{
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);

  }
}
