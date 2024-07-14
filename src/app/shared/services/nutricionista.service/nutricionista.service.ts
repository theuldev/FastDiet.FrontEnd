import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Nutricionista } from '../../models/Nutricionista';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {
  url = `${environment.url}/Nutricionista`
  constructor(private http: HttpClient) { }

  Cadastrar(nutricionista:Nutricionista){
    return this.http.post(`${this.url}/Cadastrar` ,nutricionista);
  }
  Pesquisar(){
    return this.http.get(`${this.url}/Pesquisar`);
  }
  Atualizar(nutricionista:Nutricionista){
    return this.http.get(`${this.url}/Atualizar`,);
  }
}
