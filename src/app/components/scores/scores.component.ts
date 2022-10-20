import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
})
export class ScoresComponent implements OnInit {
  //TODO: SHows a list of all players ranked
  //from highest to lowest score.

  //Each high score has a delete button which will
  //remove it from the database and the high scores list.

  constructor() {}

  ngOnInit(): void {}
}
