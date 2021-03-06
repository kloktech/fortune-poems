import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConsultComponent } from '../consult/consult.component';
import { Heart2heroComponent } from '../heart2hero/heart2hero.component';

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
  stage = 0;

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
    this.stage = 0;
  }

  goToLink(url: string) {
    window.open(url);
  }

  openConsultDialog() {
    const dialogRef = this.dialog.open(ConsultComponent, {
      width: '500px',
      data: {}
    });
  }

  openHeart2HeroDialog() {
    const dialogRef = this.dialog.open(Heart2heroComponent, {
      width: '600px',
      data: {}
    });
  }


  nextStage() {
    this.stage += 1;
  }
}
