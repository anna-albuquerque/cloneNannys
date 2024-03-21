import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  modalAberto = false;
  constructor(private router: Router){}

  abrirModal(){
    this.modalAberto= true;
  }

  fecharModal(){
    this.modalAberto = false;
  }

  navigateToCadastroTutor(){
    this.router.navigate(['cadastrar']);
    this.fecharModal();
  }

  navigateToCadastroCuidador(){
    this.router.navigate(['cadastro-cuidador']);
    this.fecharModal();
  }
}
