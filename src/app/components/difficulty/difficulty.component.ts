import { Component, OnInit } from '@angular/core';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { DifficultiesService } from 'src/app/services/difficulties.service';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css'],
})
export class DifficultyComponent implements OnInit {
  categories: string[] = [];
  difficulties: string[] = [];
  chosenCategories: string[] = [];
  chosenDifficulty: string = '';

  constructor(
    private categoriesApiService: CategoriesApiService,
    private difficultiesService: DifficultiesService
  ) {}

  ngOnInit(): void {
    this.categoriesApiService.fetchCategories().subscribe((category) => {
      this.categories = Object.keys(category);
    });
    this.difficulties = this.difficultiesService.getDifficulties();
  }
}
