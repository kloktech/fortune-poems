import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }

  // closeDialog() {
  //   this.dialog.close();
  // }
}
