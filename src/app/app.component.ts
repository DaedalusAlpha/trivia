import { Component } from '@angular/core';
import { QuestionsApiService } from './services/questions-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private questionsApiService: QuestionsApiService) {}

  title = 'trivia';

  startNewGame(): void {
    this.questionsApiService.setGameStarted(false);
  }
}
