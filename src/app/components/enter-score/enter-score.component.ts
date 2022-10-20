import { Component, OnInit } from '@angular/core';
import { HighScoresService } from 'src/app/services/high-scores.service';
import { ScoreService } from 'src/app/services/score.service';
import { Router } from '@angular/router';
import { QuestionsApiService } from 'src/app/services/questions-api.service';

@Component({
  selector: 'app-enter-score',
  templateUrl: './enter-score.component.html',
  styleUrls: ['./enter-score.component.css'],
})
export class EnterScoreComponent implements OnInit {
  constructor(
    private router: Router,
    private scoreService: ScoreService,
    private highScoreService: HighScoresService,
    private questionsApiService: QuestionsApiService
  ) {}
  name: string = '';
  finalScore: number = 0;

  ngOnInit(): void {
    this.finalScore = this.scoreService.getScore();
  }

  submitScore(): void {
    this.highScoreService
      .postHighScore(this.name, this.finalScore)
      .subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl('/scores');
        this.questionsApiService.setGameComplete(true);
      });
  }
}
