import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
url = `${environment.url}/Pessoa`
  constructor(private http: HttpClient) { }

  Cadastrar(pessoa:Pessoa){
    return this.http.post(`${this.url}/Cadastrar` ,pessoa);
  }
  Pesquisar(cpf: string){
    return this.http.get(`${this.url}/Pesquisar?=${cpf}`);
  }
  Atualizar(pessoa:Pessoa){
    return this.http.get(`${this.url}/Atualizar`,);
  }
}
