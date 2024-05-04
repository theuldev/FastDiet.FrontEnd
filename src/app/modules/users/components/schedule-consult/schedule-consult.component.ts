import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-schedule-consult',
  templateUrl: './schedule-consult.component.html',
  styleUrls: ['./schedule-consult.component.css']
})
export class ScheduleConsultComponent implements OnInit {
  name: string = '';
  clients :string[]= [
    'Emanuely','Matheus','Jorge'
  ]
  constructor() { }

  ngOnInit(): void {

  }
  



}
