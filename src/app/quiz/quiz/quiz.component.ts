import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quiz: any = [];
  userAnswers: string[] = [];
  allAnswers = [];
  activeIndex = 0;
  modalOpened = false;
  userAnswersByLetter = [];

  constructor(private quizService: QuizService, private router: Router) {
    this.quizService.getQuiz().subscribe((quiz) => {
      this.quiz = quiz;

      for (let single of this.quiz) {
        this.allAnswers.push(single.answers);
      }
    });
  }

  ngOnInit(): void {}

  clickNext() {
    this.activeIndex++;
  }

  submitQuiz() {
    this.router.navigate(['/quiz/result'], {
      state: {
        userAnswersByLetter: [...this.getUserAnswers()],
        quiz: this.quiz,
      },
    });
  }

  dismissModal() {
    this.modalOpened = !this.modalOpened;
  }

  getUserAnswers() {
    next: for (let i = 0; i < this.allAnswers.length; i++) {
      for (let key in this.allAnswers[i]) {
        if (this.allAnswers[i][key] === this.userAnswers[i]) {
          this.userAnswersByLetter.push(key);
          continue next;
        }
      }

      if (!this.userAnswersByLetter[i]) {
        this.userAnswersByLetter.push(undefined);
      }
    }

    return this.userAnswersByLetter;
  }
}
