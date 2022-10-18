import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: string[] = [
    'Arts & Literature',
    'Film & TV',
    'Food & Drink',
    'General Knowledge',
    'Geography',
    'History',
    'Music',
    'Science',
    'Society & Culture',
    'Sport & Leisure',
  ];

  constructor() {}

  getCategories(): string[] {
    return this.categories;
  }
}
