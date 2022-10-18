import { Injectable } from '@angular/core';
import { Difficulty } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class DifficultiesService {
  difficulties: string[] = ['Easy', 'Medium', 'Hard'];

  constructor() {}

  getDifficulties(): string[] {
    return this.difficulties;
  }
}
