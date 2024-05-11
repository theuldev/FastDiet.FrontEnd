import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  constructor(private Dialog : MatDialog) {}

  ngOnInit(): void {}

  openCheckDialog() {
    const openDialogRef = this.Dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });
  }
}
