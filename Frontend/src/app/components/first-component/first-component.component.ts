import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: String='Matheus';
  profissao = 'Programador';
  hobbies = ['correr','brincar','pular'];


  
}
