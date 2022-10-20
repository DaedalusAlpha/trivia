import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  score: number = 0;

  constructor() {}

  updateScore(s: number): void {
    this.score += s;
    // console.log(this.score);
  }

  getScore(): number {
    return this.score;
  }

  resetScore(): void {
    this.score = 0;
  }
}
