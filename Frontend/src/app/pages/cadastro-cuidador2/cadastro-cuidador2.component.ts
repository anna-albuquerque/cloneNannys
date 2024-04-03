import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data.service';
import { CuidadorService } from '../../services/cuidador.service';
import { Cuidador } from '../../Cuidador';
import { Router } from '@angular/router';
import { CepServiceService } from '../../services/cep-service.service';

@Component({
  selector: 'app-cadastro-cuidador2',
  templateUrl: './cadastro-cuidador2.component.html',
  styleUrl: './cadastro-cuidador2.component.css'
})
export class CadastroCuidador2Component {
  constructor(private sharedDataService: SharedDataService,private service: CepServiceService , private router: Router){}
  cep: any;
  logradouro: any;
  localidade: any;
  bairro: any;
  uf: any;
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
    this.sharedDataService.cuidador.telefone = f.value.telefone;
    this.sharedDataService.cuidador.instagram = f.value.instagram;
    this.sharedDataService.cuidador.cep = f.value.cep;
    this.sharedDataService.cuidador.estado = f.value.estado;
    this.sharedDataService.cuidador.numero = f.value.numero;
    this.sharedDataService.cuidador.rua = f.value.rua;
    this.sharedDataService.cuidador.cidade = f.value.cidade;

    console.log(this.sharedDataService.cuidador); // Verifique os dados antes da navegação

    // Navegue para a próxima rota
    this.router.navigate(['/cadastro-cuidador-3']);
  }
  
  blur(event: any) {
    this.buscaCEP();

    console.log(this.buscaCEP);
  }
  buscaCEP() {
    this.service.getCEP(this.cep).subscribe((data) => {
        this.cep = data.cep;
        this.logradouro = data.logradouro;
        this.localidade = data.localidade;
        this.uf = data.uf;

        
    });
  }
  

  
  
}