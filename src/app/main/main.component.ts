import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConsultComponent } from '../consult/consult.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  shaker = false;
  number_shown = false;
  poem_id = 0;
  poems: any;
  chosen_poem: any;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
  ) {
    // load fortune poem into variables
    this.http.get('assets/poems.json').subscribe((res) => {
      this.poems = res;
    });

  }

  ngOnInit(): void {
  }

  startShaker() {
    this.shaker = true;
    // setTimeout(function => {  this will cause issue with losing scope
    setTimeout(() => {
        this.shaker = false;
        this.number_shown = true;
        this.poem_id = Math.floor((Math.random() * 32) + 1);
        // this.poem_id = 32;
        this.chosen_poem = this.poems[this.poem_id - 1];
    }, Math.floor((Math.random() * 3) + 2) * 1000); // minimum of 2 second
  }

  resetShaker() {
    this.shaker = false;
    this.number_shown = false;
  }

  goToLink(url: string) {
    window.open(url);
  }

  goToQuote() {
    var r = ("00" + Math.floor((Math.random() * 365) + 1)).slice(-3);
    window.open('https://www.bwpublish.com/random-quote/heart-of-the-hero-' + r + '/');
  }

  openConsultDialog() {
    const dialogRef = this.dialog.open(ConsultComponent, {
      width: '500px',
      data: {}
    });
  }
}
