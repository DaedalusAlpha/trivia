import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionsApiService } from 'src/app/services/questions-api.service';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css'],
})
export class TriviaGameComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionsApiService: QuestionsApiService) {}

  ngOnInit(): void {
    this.questionsApiService.fetchQuestions().subscribe((response) => {
      this.questions = response;
      console.log(this.questions);
    });
  }
}
