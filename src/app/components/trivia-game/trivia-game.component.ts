import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionsApiService } from 'src/app/services/questions-api.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css'],
})
export class TriviaGameComponent implements OnInit {
  questions: Question[] = [];
  gameScore: number = 0;
  index: number = 0;
  gameStarted: boolean = false;
  gameComplete: boolean = false;

  constructor(
    private questionsApiService: QuestionsApiService,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    this.questionsApiService.gameActive.subscribe((game_started) => {
      this.gameStarted = game_started;
      if (this.gameStarted) {
        this.questionsApiService.fetchQuestions().subscribe((response) => {
          this.questions = response;
        });
      }
    });
    this.gameScore = this.scoreService.getScore();
  }

  updateGame(s: number): void {
    this.scoreService.updateScore(s);
    this.index++;
    if (this.index > 4) {
      this.gameComplete = true;
    }
  }
}
