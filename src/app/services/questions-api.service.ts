import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsApiService {
  triviaApi: string = 'https://the-trivia-api.com/api/questions?';
  triviaLimit: number = 5;
  private _triviaCategories: BehaviorSubject<string> =
    new BehaviorSubject<string>('history');
  readonly triviaCategories = this._triviaCategories.asObservable();

  private _triviaDifficulty: BehaviorSubject<string> =
    new BehaviorSubject<string>('medium');
  readonly triviaDifficulty = this._triviaDifficulty.asObservable();

  private _gameStarted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  readonly gameActive = this._gameStarted.asObservable();
  private _gameComplete: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  readonly gameComplete = this._gameStarted.asObservable();

  constructor(private httpClient: HttpClient) {}

  fetchQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.createApiURL());
  }

  createApiURL(): string {
    let apiURL: string = `${
      this.triviaApi
    }categories=${this._triviaCategories.getValue()}&limit=${
      this.triviaLimit
    }&difficulty=${this._triviaDifficulty.getValue()}`;
    return apiURL;
  }

  setCategories(cats: string[]): void {
    this._triviaCategories.next(cats.toString());
  }

  setDifficulty(diff: string): void {
    this._triviaDifficulty.next(diff);
  }

  //Placeholder as the limit will be hard-coded to 5.
  setLimit(limit: number): void {
    this.triviaLimit = limit;
  }

  setGameStarted(g: boolean): void {
    this._gameStarted.next(g);
    console.log(g);
  }

  setGameComplete(g: boolean): void {
    this._gameComplete.next(g);
    console.log(g);
  }
}
