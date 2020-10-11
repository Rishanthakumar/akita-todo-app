import { Component, OnInit, ValueSansProvider } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../state/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    });
  }

  submit(): void {
    this.authService.updateUsername(this.login.value.username);
    this.router.navigate(['todos']);
  }
}

