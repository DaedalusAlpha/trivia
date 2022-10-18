import { Injectable } from '@angular/core';
import { Difficulty } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class DifficultiesService {
  difficulties: string[] = Object.keys(Difficulty);
  constructor() {}

  getDifficulties(): string[] {
    return this.difficulties;
  }
}
