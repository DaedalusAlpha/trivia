import { Component, OnInit } from '@angular/core';
import { DifficultiesService } from 'src/app/services/difficulties.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { QuestionsApiService } from 'src/app/services/questions-api.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css'],
})
export class DifficultyComponent implements OnInit {
  categories: string[] = [];
  difficulties: string[] = [];
  selectedCategories: { cat: string; chosen: boolean }[] = [];
  chosenDifficulty: string = 'Easy';
  gameStarted = false;

  constructor(
    private questionsApiService: QuestionsApiService,
    private difficultiesService: DifficultiesService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
    this.difficulties = this.difficultiesService.getDifficulties();
    this.populateSelectedCategories();
  }

  populateSelectedCategories(): void {
    this.categories.forEach((c) => {
      this.selectedCategories.push({ cat: c, chosen: false });
    });
  }

  checkIfAnyCategoryTrue(): boolean {
    return this.selectedCategories.some((element) => element.chosen);
  }

  setAllCategories(status: boolean): void {
    this.selectedCategories.map((element) => (element.chosen = status));
  }

  startTrivia(): void {
    let tempCategories: string[] = [];
    this.gameStarted = true;
    this.selectedCategories.forEach((element) => {
      if (element.chosen) {
        tempCategories.push(
          element.cat.replace(/&/gi, 'and').replace(/ /gi, '_').toLowerCase()
        );
      }
    });
    this.questionsApiService.setCategories(tempCategories);
    this.questionsApiService.setDifficulty(this.chosenDifficulty.toLowerCase());
    this.questionsApiService.fetchQuestions();
    this.questionsApiService.setGameStarted(true);
  }
}
