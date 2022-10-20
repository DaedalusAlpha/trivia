import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HighScore } from '../models/high-score';
import { HttpClient } from '@angular/common/http';
import { secret } from '../models/secret';

@Injectable({
  providedIn: 'root',
})
export class HighScoresService {
  key: string = secret.key;
  url: string = 'https://scores-9a36.restdb.io/rest/score';

  constructor(private httpClient: HttpClient) {}

  getHighScores(): Observable<HighScore[]> {
    return this.httpClient.get<HighScore[]>(this.url, {
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': this.key,
      },
    });
  }

  postHighScore(_n: string, _s: number): Observable<HighScore> {
    console.log(this.url);
    console.log(_n, _s);
    return this.httpClient.post<HighScore>(
      this.url,
      { name: _n, score: _s },
      {
        headers: {
          'cache-control': 'no-cache',
          'x-apikey': this.key,
          'content-type': 'application/json',
        },
      }
    );
  }

  deleteHighScore(h: HighScore): Observable<HighScore> {
    return this.httpClient.delete<HighScore>(`${this.url}/${h._id}`, {
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': this.key,
        'content-type': 'application/json',
      },
    });
  }
}
