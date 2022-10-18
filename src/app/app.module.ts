import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { TriviaQuestionComponent } from './components/trivia-question/trivia-question.component';
import { ScoresComponent } from './components/scores/scores.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';

@NgModule({
  declarations: [
    AppComponent,
    DifficultyComponent,
    TriviaQuestionComponent,
    ScoresComponent,
    TriviaGameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
