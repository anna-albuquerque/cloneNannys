import { Component, OnInit } from '@angular/core';
import { CuidadorService } from '../../services/cuidador.service';
import { Cuidador } from '../../Cuidador';
import { CaracteristicasService } from '../../services/caracteristicas.service';
import { Filtros } from '../../Filtros';
import { Caracteristicas } from '../../Caracteristicas';

@Component({
  selector: 'app-buscar-cuidador',
  templateUrl: './buscar-cuidador.component.html',
  styleUrl: './buscar-cuidador.component.css'
})
export class BuscarCuidadorComponent implements OnInit{
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
  
  
  
  
  cuidadors: Cuidador[]=[];
  caracteristicasSelecionadas: string[] = [];
  cuidadoresFiltrados: Cuidador[]=[]
  

  constructor(private cuidadorService: CuidadorService){}

  ngOnInit() {
    this.getCuidadors();
  }

  getCuidadors() {
    this.cuidadorService.getCuidadors().subscribe(data => {
      this.cuidadors = data;
      console.log(this.cuidadors)

    });
  }
  
  filtrarCuidadores() {
    this.cuidadoresFiltrados = [];
    console.log('Cuidadores Filtrados:', this.cuidadoresFiltrados);
  }
  
  
  toggleCaracteristica(caracteristica: string) {
    // Toggle a característica
    const index = this.caracteristicasSelecionadas.indexOf(caracteristica);
    if (index === -1) {
      // Se não estiver na lista, adiciona
      this.caracteristicasSelecionadas.push(caracteristica);
    } else {
      // Se estiver na lista, remove
      this.caracteristicasSelecionadas.splice(index, 1);
    }
  }


  
  toggleCapacidadeAdestramento() {
    this.capacidadeAdestramento = !this.capacidadeAdestramento;
    this.toggleCaracteristica('capacidade_adestramento');
    console.log('Capacidade de Adestramento:', this.capacidadeAdestramento);
  }

  toggleEstudanteVeterinaria() {
    this.estudanteVeterinaria = !this.estudanteVeterinaria;
    this.toggleCaracteristica('estudante_de_veterinaria');
  }

  toggleMedicoVeterinaria() {
    this.medicoVeterinaria = !this.medicoVeterinaria;
    this.toggleCaracteristica('medico_veterinario');
  }

  toggleAceitaMultiplosPets() {
    this.aceitaMultiplosPets = !this.aceitaMultiplosPets;
    this.toggleCaracteristica('aceita_multiplos_pets');
  }

  toggleCuidadorComum() {
    this.cuidadorComum = !this.cuidadorComum;
    this.toggleCaracteristica('cuidador_comum');
  }

  togglePetAte5kg() {
    this.petAte5kg = !this.petAte5kg;
    this.toggleCaracteristica('pet_ate_5kg');
  }

  togglePet5kgA10kg() {
    this.pet5kgA10kg = !this.pet5kgA10kg;
    this.toggleCaracteristica('pet_5kg_a_10kg');
  }

  togglePet10kgA20kg() {
    this.pet10kgA20kg = !this.pet10kgA20kg;
    this.toggleCaracteristica('pet_10kg_a_20kg');
  }

  togglePet20kgA40kg() {
    this.pet20kgA40kg = !this.pet20kgA40kg;
    this.toggleCaracteristica('pet_20kg_a_40kg');
  }

  toggleSoPetCastrado() {
    this.soPetCastrado = !this.soPetCastrado;
    this.toggleCaracteristica('so_pet_castrado');
  }

  togglePetNaoCastrado() {
    this.petNaoCastrado = !this.petNaoCastrado;
    this.toggleCaracteristica('pet_nao_castrado');
  }

  togglePetFemea() {
    this.petFemea = !this.petFemea;
    this.toggleCaracteristica('pet_femea');
  }

  togglePetMacho() {
    this.petMacho = !this.petMacho;
    this.toggleCaracteristica('pet_macho');
  }

  toggleMedicacaoOral() {
    this.medicacaoOral = !this.medicacaoOral;
    this.toggleCaracteristica('medicacao_oral');
  }

  toggleMedicacaoInjetavel() {
    this.medicacaoInjetavel = !this.medicacaoInjetavel;
    this.toggleCaracteristica('medicacao_injetavel');
  }

  submitClicado: boolean = false;
  submit(){
      this.submitClicado = true;
      this.filtrarCuidadores();
      console.log('Características Selecionadas:', this.caracteristicasSelecionadas);
  }
    

  }

    
  




