import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    * {
      margin: 1.5rem;
    }
  `]
})
export class DashboardComponent implements OnInit {

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/auth');
  }

}
