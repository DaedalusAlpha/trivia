import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/question';
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'app-trivia-question',
  templateUrl: './trivia-question.component.html',
  styleUrls: ['./trivia-question.component.css'],
})
export class TriviaQuestionComponent implements OnInit {
  @Input() question: Question = {} as Question;
  @Input() ind: number = 1;
  @Output() score = new EventEmitter<number>();

  answers: string[] = [];

  constructor() {}

  ngOnInit(): void {
    let tempAnswers: string[] = [];
    tempAnswers.push(this.question.correctAnswer);
    tempAnswers = tempAnswers.concat(this.question.incorrectAnswers);
    // console.log(tempAnswers);
    this.answers = arrayShuffle(tempAnswers);
    // console.log(this.answers);
  }

  submitAnswer(a: string): void {
    let newScore: number = 0;
    if (a == this.question.correctAnswer) {
      newScore = 1;
    }
    this.score.emit(newScore);
  }
}
