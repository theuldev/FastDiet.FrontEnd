import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/angular';
import { DayGridView } from '@fullcalendar/daygrid';
import { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-register-schedule-nutritionist',
  templateUrl: './register-schedule-nutritionist.component.html',
  styleUrls: ['./register-schedule-nutritionist.component.scss']
})
export class RegisterScheduleNutritionistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  calendarOptions: CalendarOptions = {
    height: 500,
    locale: 'pt-br',
    headerToolbar: {
      right: 'prev next',
      center: '',
      left: 'title',
    },
    dayMaxEventRows: 2,
    dateClick: function (info) {
      info.view.calendar.zoomTo(info.date, 'dayGridChange');
    },

    views: {
      dayGridChange: {
        type: 'dayGridDay',
        dayMaxEventRows: false,
      },
    },
    titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
    events: [
      {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
       {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
      {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
      {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
      {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
      },
      {
        title: 'Consulta da Fernanda',
        start: '2022-09-17T12:30:00',
        end: '2022-09-17T13:30:00',
        color: 'green',
        allDay:false
      },
      {
        title: 'Consulta do Matheus',
        start: '2022-09-19T12:30:00',
        allDay: false,
        color: 'red',
      },
      {
        title: 'Consulta do Flavio',
        start: new Date(),
        allDay: false,
        color: 'red',
      },
      {
        title: 'Consulta do Flavio',
        start: new Date(),
        allDay: false,
        color: 'red',
      },
      {
        title: 'Consulta do Flavio',
        start: new Date(),
        allDay: false,
        color: 'red',
      },
      {
        title: 'Consulta do Flavio',
        start: new Date(),
        allDay: false,
        color: 'red',
      },
    ],
  };
  changeModeDate(info: DateSelectArg) {
    info.view.calendar.changeView('timeGridDay');
  }
}
