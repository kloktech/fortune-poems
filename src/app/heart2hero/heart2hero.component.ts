import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-heart2hero',
  templateUrl: './heart2hero.component.html',
  styleUrls: ['./heart2hero.component.css']
})
export class Heart2heroComponent implements OnInit {

  quoteNum: any;

  constructor(
    public dialog: MatDialog,
  ) {
    this.quoteNum = ("00" + Math.floor((Math.random() * 365) + 1)).slice(-3);
  }

  ngOnInit(): void {
  }

}
