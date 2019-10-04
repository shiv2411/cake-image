import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData } from './login.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public router: Router, public http: HttpClient, public authservice: AuthService) {}
  ngOnInit() {
    this.authStatusSub = this.authservice.getAuthStatusListener().subscribe(
      authstatus => {
        this.isLoading = false;
      }
    );
  }

  LoginForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authservice.login(form.value.email, form.value.password);
  }

    ngOnDestroy() {
      this.authStatusSub.unsubscribe();
    }
  }

