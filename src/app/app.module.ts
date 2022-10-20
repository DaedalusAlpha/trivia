import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { TriviaQuestionComponent } from './components/trivia-question/trivia-question.component';
import { ScoresComponent } from './components/scores/scores.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';
import { FormsModule } from '@angular/forms';
import { EnterScoreComponent } from './components/enter-score/enter-score.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'trivia', component: TriviaGameComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '', redirectTo: '/trivia', pathMatch: 'full' },
  { path: '**', component: TriviaGameComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DifficultyComponent,
    TriviaQuestionComponent,
    ScoresComponent,
    TriviaGameComponent,
    EnterScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
