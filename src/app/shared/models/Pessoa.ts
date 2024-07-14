import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export interface Pessoa {
    id: number,
    nome: string,
    cpf: string,
    nascimento: Date,
    telefones: Telefone[],
    email: string,
    gestante: boolean,
    lactante: true,
    perfil: string,
    sexo: string,
    enderecoId: number,
    enderecoModel: Endereco
}