import { Component } from '@angular/core';
import { Cuidador } from '../../Cuidador';
import { CuidadorService } from '../../services/cuidador.service';
import { SharedDataService } from '../../services/shared-data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cuidador3',
  templateUrl: './cadastro-cuidador3.component.html',
  styleUrl: './cadastro-cuidador3.component.css'
})
export class CadastroCuidador3Component {
  constructor(private sharedDataService: SharedDataService, private service: CuidadorService, private router: Router){}
  capacidadeAdestramento: boolean= false;
  estudanteVeterinaria: boolean =false;
  medicoVeterinaria: boolean=false;
  aceitaMultiplosPets: boolean=false;
  cuidadorComum: boolean=false;
  petAte5kg: boolean=false;
  pet5kgA10kg: boolean=false;
  pet10kgA20kg: boolean=false;
  pet20kgA40kg: boolean=false;
  soPetCastrado: boolean=false;
  petNaoCastrado: boolean=false;
  petFemea: boolean=false;
  petMacho: boolean=false;
  medicacaoOral: boolean=false;
  medicacaoInjetavel: boolean=false;

  cuidadors : Cuidador[] = [];
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
    this.sharedDataService.cuidador.caracteristicas.estudante_de_veterinaria = f.value.estudante_de_veterinaria;
    this.sharedDataService.cuidador.caracteristicas.medico_veterinario = f.value.medico_veterinario;
    this.sharedDataService.cuidador.caracteristicas.capacidade_adestramento = f.value.capacidade_adestramento;
    this.sharedDataService.cuidador.caracteristicas.aceita_multiplos_pets = f.value.aceita_multiplos_pets;
    this.sharedDataService.cuidador.caracteristicas.cuidador_comum = f.value.cuidador_comum;
    this.sharedDataService.cuidador.caracteristicas.pet_ate_5kg = f.value.pet_ate_5kg;
    this.sharedDataService.cuidador.caracteristicas.pet_5kg_a_10kg = f.value.pet_5kg_a_10kg;
    this.sharedDataService.cuidador.caracteristicas.pet_10kg_a_20kg = f.value.pet_10kg_a_20kg;
    this.sharedDataService.cuidador.caracteristicas.pet_20kg_a_40kg = f.value.pet_20kg_a_40kg;
    this.sharedDataService.cuidador.caracteristicas.so_pet_castrado = f.value.so_pet_castrado;
    this.sharedDataService.cuidador.caracteristicas.pet_nao_castrado = f.value.pet_nao_castrado;
    this.sharedDataService.cuidador.caracteristicas.pet_femea = f.value.pet_femea;
    this.sharedDataService.cuidador.caracteristicas.pet_macho = f.value.pet_macho;
    this.sharedDataService.cuidador.caracteristicas.medicacao_oral = f.value.medicacao_oral;
    this.sharedDataService.cuidador.caracteristicas.medicacao_injetavel = f.value.medicacao_injetavel;
    console.log(this.sharedDataService.cuidador);
    console.log(this.sharedDataService.cuidador.caracteristicas)
    const cuidadorJson = JSON.stringify(this.sharedDataService.cuidador);
    console.log(cuidadorJson);
    this.router.navigate(['/home']);

    

  }

  toggleEstudanteVeterinaria() {
    this.sharedDataService.cuidador.caracteristicas.estudante_de_veterinaria = !this.sharedDataService.cuidador.caracteristicas.estudante_de_veterinaria;
  }

  toggleMedicoVeterinario() {
    this.sharedDataService.cuidador.caracteristicas.medico_veterinario = !this.sharedDataService.cuidador.caracteristicas.medico_veterinario;
  }

  toggleCapacidadeAdestramento() {
    this.sharedDataService.cuidador.caracteristicas.capacidade_adestramento = !this.sharedDataService.cuidador.caracteristicas.capacidade_adestramento;
  }

  toggleAceitaMultiplosPets() {
    this.sharedDataService.cuidador.caracteristicas.aceita_multiplos_pets = !this.sharedDataService.cuidador.caracteristicas.aceita_multiplos_pets;
  }

  toggleCuidadorComum() {
    this.sharedDataService.cuidador.caracteristicas.cuidador_comum = !this.sharedDataService.cuidador.caracteristicas.cuidador_comum;
  }

  togglePetAte5kg() {
    this.sharedDataService.cuidador.caracteristicas.pet_ate_5kg = !this.sharedDataService.cuidador.caracteristicas.pet_ate_5kg;
  }

  togglePet5kgA10kg() {
    this.sharedDataService.cuidador.caracteristicas.pet_5kg_a_10kg = !this.sharedDataService.cuidador.caracteristicas.pet_5kg_a_10kg;
  }

  togglePet10kgA20kg() {
    this.sharedDataService.cuidador.caracteristicas.pet_10kg_a_20kg = !this.sharedDataService.cuidador.caracteristicas.pet_10kg_a_20kg;
  }

  togglePet20kgA40kg() {
    this.sharedDataService.cuidador.caracteristicas.pet_20kg_a_40kg = !this.sharedDataService.cuidador.caracteristicas.pet_20kg_a_40kg;
  }

  toggleSoPetCastrado() {
    this.sharedDataService.cuidador.caracteristicas.so_pet_castrado = !this.sharedDataService.cuidador.caracteristicas.so_pet_castrado;
  }

  togglePetNaoCastrado() {
    this.sharedDataService.cuidador.caracteristicas.pet_nao_castrado = !this.sharedDataService.cuidador.caracteristicas.pet_nao_castrado;
  }

  togglePetFemea() {
    this.sharedDataService.cuidador.caracteristicas.pet_femea = !this.sharedDataService.cuidador.caracteristicas.pet_femea;
  }

  togglePetMacho() {
    this.sharedDataService.cuidador.caracteristicas.pet_macho = !this.sharedDataService.cuidador.caracteristicas.pet_macho;
  }

  toggleMedicacaoOral() {
    this.sharedDataService.cuidador.caracteristicas.medicacao_oral = !this.sharedDataService.cuidador.caracteristicas.medicacao_oral;
  }

  toggleMedicacaoInjetavel() {
    this.sharedDataService.cuidador.caracteristicas.medicacao_injetavel = !this.sharedDataService.cuidador.caracteristicas.medicacao_injetavel;
  }

}
