import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  constructor(private Dialog : MatDialog) {}

  ngOnInit(): void {}
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: 600,
    locale: ['pt-br'],
    themeSystem: '',
    headerToolbar: {
      right: 'dayGridMonth timeGridWeek timeGridDay',
      center: 'today prevYear,prev,next,nextYear',
      left: 'title',
    },
    dayMaxEventRows: 2,
    dateClick: function (info) {
      info.view.calendar.zoomTo(info.date, '');
    },

    views: {
      DayViewChange: {
        type: 'dayGridDay',
      },
    },
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
    ],
  };
  openCheckDialog() {
    const openDialogRef = this.Dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });
  }
}
