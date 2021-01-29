import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
    // load fortune poem into variables
    this.http.get('assets/poems.json').subscribe((res) => {
      this.poems = res;
      console.log('--- result :: ',  this.poems);
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
    }, 500);
  }



}
