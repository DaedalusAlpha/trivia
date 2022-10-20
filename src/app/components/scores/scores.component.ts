import { Component, OnInit } from '@angular/core';
import { HighScore } from 'src/app/models/high-score';
import { HighScoresService } from 'src/app/services/high-scores.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
})
export class ScoresComponent implements OnInit {
  scoresList: HighScore[] = [];

  //Each high score has a delete button which will
  //remove it from the database and the high scores list.

  constructor(private highScoresService: HighScoresService) {}

  ngOnInit(): void {
    this.getScores();
  }

  removeScore(h: HighScore): void {
    this.highScoresService.deleteHighScore(h).subscribe((response) => {
      // console.log(response);
      this.getScores();
    });
  }

  getScores(): void {
    this.highScoresService.getHighScores().subscribe((response) => {
      this.scoresList = response.sort((a, b) => b.score - a.score);
    });
  }
}
