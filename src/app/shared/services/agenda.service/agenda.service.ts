import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consultorio } from '../../models/Consultorio';
import { Pessoa } from '../../models/Pessoa';
import { Agenda } from '../../models/Agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = `${environment.url}/Agenda`
  constructor(private http: HttpClient) { }

  Cadastrar(agenda : Agenda){
    return this.http.post(`${this.url}/Cadastrar` ,agenda);
  }
  Pesquisar(body:any){
    return this.http.get(`${this.url}/Pesquisar`,body);
  }
    // não pronto na api
  Cancelar(queryBody:any){
    return this.http.put(`${this.url}/Cancelar`,queryBody);
  }
    // não pronto na api
  Atualizar(agenda : Agenda){
    return this.http.put(`${this.url}/Atualizar`,agenda);
  }
}
