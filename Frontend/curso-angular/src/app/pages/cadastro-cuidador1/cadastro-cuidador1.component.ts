import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data.service';
import { CuidadorService } from '../../services/cuidador.service';
import { Cuidador } from '../../Cuidador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cuidador1',
  templateUrl: './cadastro-cuidador1.component.html',
  styleUrl: './cadastro-cuidador1.component.css'
})
export class CadastroCuidador1Component {
  constructor(private sharedDataService: SharedDataService, private router: Router){}
  cuidadors: Cuidador[] = [];
  cuidador: Cuidador = {
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    rua: '',
    data_nascimento: '',
    telefone: '',
    instagram:'',
    cep:'',
    cidade:'',
    estado:'',
    numero:0,
    caracteristicas: {
      estudante_de_veterinaria: false,
      medico_veterinario: false,
      capacidade_adestramento: false,
      aceita_multiplos_pets: false,
      cuidador_comum: false,
      pet_ate_5kg: false,
      pet_5kg_a_10kg: false,
      pet_10kg_a_20kg: false,
      pet_20kg_a_40kg: false,
      so_pet_castrado: false,
      pet_nao_castrado: false,
      pet_femea: false,
      pet_macho: false,
      medicacao_oral: false,
      medicacao_injetavel: false
    }
  };

  

  onSubmit(f: NgForm){
    this.sharedDataService.cuidador.nome = f.value.nome;
    this.sharedDataService.cuidador.sobrenome = f.value.sobrenome;
    this.sharedDataService.cuidador.data_nascimento = f.value.data_nascimento;
    this.sharedDataService.cuidador.cpf = f.value.cpf;
    this.sharedDataService.cuidador.email = f.value.email;
    
    console.log(this.sharedDataService.cuidador); // Verifique os dados antes da navegação

    // Navegue para a próxima rota
    this.router.navigate(['/cadastro-cuidador-2']);
  }
  }
  
  
  

