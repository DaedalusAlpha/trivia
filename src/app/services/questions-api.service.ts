import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Difficulty, Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsApiService {
  triviaApi: string = 'https://the-trivia-api.com/api/questions?';
  triviaCategories: string = 'history';
  triviaLimit: number = 5;
  triviaDifficulty: string = 'easy';

  constructor(private httpClient: HttpClient) {}
  fetchQuestions(): Observable<Question> {
    return this.httpClient.get<Question>(this.createApiURL());
  }

  createApiURL(): string {
    let apiURL: string = `${this.triviaApi}categories=${this.triviaCategories}&limit=${this.triviaLimit}&difficulty=${this.triviaDifficulty}`;
    return apiURL;
  }

  setCategories(cats: string[]): void {
    this.triviaCategories = cats.toString();
  }
}
