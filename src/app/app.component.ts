import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    if (sessionStorage.getItem('signedin')?.startsWith('t')) {
      this.authService.signedin$.next(true);
      this.router.navigateByUrl('/quiz');
    } else {
      this.authService.signedin$.next(false);
    }

    this.signedin$ = this.authService.signedin$;
  }
}
