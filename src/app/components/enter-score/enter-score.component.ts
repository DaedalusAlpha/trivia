import { Component, OnInit } from '@angular/core';
import { HighScoresService } from 'src/app/services/high-scores.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-enter-score',
  templateUrl: './enter-score.component.html',
  styleUrls: ['./enter-score.component.css'],
})
export class EnterScoreComponent implements OnInit {
  constructor(
    private scoreService: ScoreService,
    private highScoreService: HighScoresService
  ) {}
  name: string = '';
  finalScore: number = 0;

  ngOnInit(): void {
    this.finalScore = this.scoreService.getScore();
  }

  submitScore(): void {
    this.highScoreService
      .postHighScore(this.name, this.finalScore)
      .subscribe((response) => console.log(response));
  }
}
