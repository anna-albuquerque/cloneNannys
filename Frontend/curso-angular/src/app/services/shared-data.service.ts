import { Injectable } from '@angular/core';
import { Cuidador } from '../Cuidador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  url = 'http://127.0.0.1:8000/api/v1/';

  constructor(private http: HttpClient) { }

  cuidador: Cuidador = { nome: '',instagram:'', sobrenome: '', cpf: '', email: '', data_nascimento: '',cep:'',cidade:'',estado:'',numero:0,rua:'',telefone:'',
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
createCuidador(cuidador: Cuidador): Observable<Cuidador>{
  console.log('Tutor a ser enviado:', cuidador);
  return this.http.post<Cuidador>(this.url + 'cuidadores/', cuidador);
}

};
  

