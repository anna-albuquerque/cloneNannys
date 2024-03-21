
import { Caracteristicas } from "./Caracteristicas";


export interface Cuidador{
    nome: string;
    sobrenome: string;
    cpf: string;
    email: string;
    data_nascimento: string;
    telefone: string;
    instagram: string;
    cep: string;
    cidade: string;
    estado: string;
    numero: number;
    rua: string;
    caracteristicas: Caracteristicas;
}