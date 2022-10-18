import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-trivia-question',
  templateUrl: './trivia-question.component.html',
  styleUrls: ['./trivia-question.component.css'],
})
export class TriviaQuestionComponent implements OnInit {
  @Input() question: Question = {} as Question;
  @Input() ind: number = 1;
  @Output() answer = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  submitAnswer(): void {
    this.answer.emit();
  }
}
