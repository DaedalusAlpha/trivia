import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-score',
  templateUrl: './enter-score.component.html',
  styleUrls: ['./enter-score.component.css'],
})
export class EnterScoreComponent implements OnInit {
  constructor() {}
  name: string = '';

  ngOnInit(): void {
  }

  enterScore(): void {
    //POST to restdb.io
  }
}
