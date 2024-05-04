import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-nutritionist',
  templateUrl: './register-nutritionist.component.html',
  styleUrls: ['./register-nutritionist.component.scss'],
})
export class RegisterNutritionistComponent implements OnInit {
  order: any = [1];
  addCont: number = 1;

  constructor() { }
  ngOnInit(): void { }
  public append(){

      this.order.push(this.addCont)
    }

  public remove(n: number) {
    {
      let index = this.order.indexOf(n)
      this.order.splice(index, 1);
    }
  }
}
