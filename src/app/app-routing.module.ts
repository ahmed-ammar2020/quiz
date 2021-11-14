import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './auth/sign/sign.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { AuthGuard } from './auth/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
  },
  {
    path: 'signout',
    component: SignoutComponent,
  },
  {
    path: 'quiz',
    canLoad: [AuthGuard],
    loadChildren: () => import('./quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
