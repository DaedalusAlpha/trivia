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
  gameActive: boolean = false;
  gameComplete: boolean = false;

  constructor(
    private questionsApiService: QuestionsApiService,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    this.questionsApiService.gameActive.subscribe((game_state) => {
      this.gameActive = game_state;
      if (this.gameActive) {
        this.questionsApiService.fetchQuestions().subscribe((response) => {
          this.questions = response;
          // console.log(this.questions);
        });
      }
    });
    this.gameScore = this.scoreService.getScore();
  }

  updateGame(s: number): void {
    this.scoreService.updateScore(s);
    this.index++;
    if (this.index > 4) {
      //send to behavior
      this.gameComplete = true;
    }
  }
}
