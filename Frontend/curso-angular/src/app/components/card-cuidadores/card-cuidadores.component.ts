import { Component } from '@angular/core';
import { Cuidador } from '../../Cuidador';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-cuidadores',
  templateUrl: './card-cuidadores.component.html',
  styleUrl: './card-cuidadores.component.css'
})

export class CardCuidadoresComponent {
  @Input() cuidador!: Cuidador;

  whatsapp: string= 'https://wa.me/';
  

  

}
