import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [QuizComponent, ResultComponent, ModalComponent],
  imports: [CommonModule, QuizRoutingModule, MaterialModule, FormsModule],
})
export class QuizModule {}
