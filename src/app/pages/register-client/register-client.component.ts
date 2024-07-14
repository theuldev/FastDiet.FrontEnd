import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/Pessoa';
import { PessoaService } from 'src/app/shared/services/pessoa.service/pessoa.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  pessoaForm!: FormGroup;
  submitted: boolean = false;
  order: any = [1];
  addCont: number = 1;

  private pessoaService: PessoaService
  constructor(private fb: FormBuilder, _pessoaService: PessoaService) {
    this.pessoaService = _pessoaService
    this.pessoaForm = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      nascimento: ['', Validators.required],
      telefones: this.fb.array([this.fb.control('')]),
      email: ['', Validators.required],
      gestante: ['', Validators.required],
      lactante: ['', Validators.required],
      perfil: ['', Validators.required],
      sexo: ['', Validators.required],

    })
  }
  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.pessoaForm.value)
    console.log(this, this.pessoaForm.get('telefones') as FormArray)
    this.submitted = true;

    this.pessoaService.Cadastrar(this.pessoaForm.value).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err)
    }

    )
  }

  get telefones() {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  public append() {

    this.order.push(this.addCont)
    this.telefones.push(this.fb.control(''))
  }

  public remove(n: number) {
    {
      let index = this.order.indexOf(n)
      this.order.splice(index, 1);
      this.telefones.removeAt(n);
    }
  }

}
