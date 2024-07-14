import { Injectable } from '@angular/core';
import { Consultorio } from '../../models/Consultorio';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {
  url = `${environment.url}/Consultorio`
  constructor(private http: HttpClient) { }

  Cadastrar(consultorio : Consultorio){
    return this.http.post(`${this.url}/Cadastrar` ,consultorio);
  }
  Pesquisar(body:any){
    return this.http.get(`${this.url}/Atualizar`,body);
  }
    // não pronto na api
  Listar(queryBody:any){
    return this.http.get(`${this.url}/Atualizar`,queryBody);
  }
    // não pronto na api
  Desativar(pessoa:Pessoa){
    return this.http.get(`${this.url}/Atualizar`,);
  }
}