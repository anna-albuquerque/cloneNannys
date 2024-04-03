import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  
/*
  animalDetails = ''

  constructor( private listservice: ListService) {
    this.getAnimals();

  }

  showAge(animal: Animal){
    this.animalDetails=`O pet ${animal.name} tem ${animal.age} anos e sua especie é ${animal.type}`;
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal');
    this.animals = this.listservice.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listservice.getAll().subscribe((animals) => (this.animals =animals));
  }
*/
}
