import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Tutor } from '../../Tutor';
import { TutorService } from '../../services/tutor.service';
@Component({
  selector: 'app-cadastro-tutor1',
  templateUrl: './cadastro-tutor1.component.html',
  styleUrl: './cadastro-tutor1.component.css'
})
export class CadastroTutor1Component implements OnInit {
  tutors: Tutor[] = [];
  tutor: Tutor = {nome:'',sobrenome:'',cpf:'', email:'', data_nascimento: new Date('01/12/1999') };
  
  constructor(private service: TutorService){}

  onSubmit( f : NgForm) {
    this.tutor.nome = f.value.nome;
    this.tutor.sobrenome = f.value.sobrenome;
    this.tutor.cpf = f.value.cpf;
    this.tutor.email = f.value.email;
    this.service.createTutor(this.tutor).subscribe(data=> {
      console.log(data);
      this.tutors.push(data);
    });
  }
  
  ngOnInit() {
    this.service.getTutors().subscribe( data => this.tutors = data);
  }

  }


