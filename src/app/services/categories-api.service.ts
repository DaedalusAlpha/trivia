import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService {
  categoriesApi: string = 'https://the-trivia-api.com/api/categories';

  // categories: string[][] = [
  //   ['Arts & Literature',  'arts_and_literature'],
  //   ['Film & TV', ]
  // ]

  constructor(private httpClient: HttpClient) {}
  fetchCategories(): Observable<Category> {
    return this.httpClient.get<Category>(this.categoriesApi);
  }
}
