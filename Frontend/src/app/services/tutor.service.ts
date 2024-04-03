import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from '../Tutor';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  url = 'http://127.0.0.1:8000/api/v1/';

  constructor(private http: HttpClient) { }

  createTutor(tutor: Tutor): Observable<Tutor>{
    console.log('Tutor a ser enviado:', tutor);
    return this.http.post<Tutor>(this.url + 'tutores/', tutor);
  }

  getTutors(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.url + 'tutores/');
  }

  

}
