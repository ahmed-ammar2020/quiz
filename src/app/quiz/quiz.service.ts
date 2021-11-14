import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private baseUrl = 'https://quizapi.io/api/v1/questions';

  constructor(private http: HttpClient) {}

  getQuiz() {
    return this.http.get(this.baseUrl, {
      params: {
        apiKey: 'fdDnG9kLYwDUIg5o2g4hFrcKFVoKKsQxxayygSmq',
        limit: 10,
      },
    });
  }
}
