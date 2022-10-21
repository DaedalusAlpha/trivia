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

  startTrivia(): void {
    this.gameStarted = true;
    this.questionsApiService.setCategories(
      this.selectedCategories.map((element) => {
        return element.cat
          .replace(/ /gi, '_')
          .replace(/&/gi, 'and')
          .toLowerCase();
      })
    );
    this.questionsApiService.setDifficulty(this.chosenDifficulty.toLowerCase());
    this.questionsApiService.fetchQuestions();
    this.questionsApiService.setGameStarted(true);
  }
}
