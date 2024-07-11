import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'https://annacarolinneam.pythonanywhere.com/api/v1/'


  constructor(private http: HttpClient) { }

}
