import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TextsToShowTemp {
  score: string;
  totalQuestions: number;
  correctsAnswers: number;
  topic: string;
  grade: string;
  final: string;
  text: string;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  userAnswersByLetter: string[] = [];
  quiz = [];
  numberOfCorrectAnswers = 0;
  allRightAnswers = [];
  textsToShow: TextsToShowTemp[];
  questions: string[] = [];
  answers = [];
  allStringRightAnswers: string[] = [];

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.userAnswersByLetter =
        this.router.getCurrentNavigation().extras.state.userAnswersByLetter;
      this.quiz = this.router.getCurrentNavigation().extras.state.quiz;

      for (let i = 0; i < this.quiz.length; i++) {
        this.questions.push(this.quiz[i].question);
      }

      this.answers = this.quiz.map((single) => single.answers);

      this.quiz = this.quiz.map((single) => single.correct_answers);
    }

    for (let i = 0; i < this.quiz.length; i++) {
      for (let key in this.quiz[i]) {
        if (this.quiz[i][key] === 'true') {
          this.allRightAnswers.push(key.slice(0, 8));
        }
      }
    }

    for (let i = 0; i < this.answers.length; i++) {
      for (let key in this.answers[i]) {
        // console.log(key, this.allRightAnswers[i]);

        if (key === this.allRightAnswers[i]) {
          this.allStringRightAnswers.push(this.answers[i][key]);
        }
      }
    }

    for (let i = 0; i < this.userAnswersByLetter.length; i++) {
      if (this.userAnswersByLetter[i] === this.allRightAnswers[i]) {
        this.numberOfCorrectAnswers++;
      }
    }

    this.textsToShow = [
      {
        score: this.numberOfCorrectAnswers * 10 + '%',
        totalQuestions: 10,
        correctsAnswers: this.numberOfCorrectAnswers,
        topic: 'General Quiz',
        grade: 'F',
        final: 'failed',
        text: 'OH BUMMER, YOU NEED TO STUDY MORE!',
      },
      {
        score: this.numberOfCorrectAnswers * 10 + '%',
        totalQuestions: 10,
        correctsAnswers: this.numberOfCorrectAnswers,
        topic: 'General Quiz',
        grade: 'B',
        final: 'succeeded',
        text: 'GOOD WORK!',
      },
      {
        score: this.numberOfCorrectAnswers * 10 + '%',
        totalQuestions: 10,
        correctsAnswers: this.numberOfCorrectAnswers,
        topic: 'General Quiz',
        grade: 'A',
        final: 'succeeded',
        text: 'YOUR THE BEST!',
      },
    ];
  }

  ngOnInit(): void {}

  redoQuiz() {
    this.router.navigateByUrl('/quiz');
  }
}
