import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.css']
})
export class CadastroFotoComponent {
  fotoForm: FormGroup;
  fotoSelecionada: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.fotoForm = this.fb.group({
      // Adicione outros campos do formulário, se necessário
    });
  }

  onSubmit() {
    // Lógica para enviar a fotoSelecionada para a API, se necessário
    console.log('Foto selecionada:', this.fotoSelecionada);
  }

  onFileSelected(event: Event) {
    const fileInput = (event.target as HTMLInputElement);
    const file = fileInput.files?.[0];

    if (file) {
      // Converte a imagem para uma string base64 para exibição
      const reader = new FileReader();
      reader.onload = () => {
        this.fotoSelecionada = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
      