import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService {
  categoriesApi: string = 'https://the-trivia-api.com/api/categories';

  constructor(private httpClient: HttpClient) {}
  fetchCategories(): Observable<Categories> {
    return this.httpClient.get<Categories>(this.categoriesApi);
  }
}
