import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(public apiService: ApiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  login(data) {
    this.apiService.login(data).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message === 'Login successful') {
          this.toastr.success(res.message);
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigate(['/home']);
        } else {
          this.toastr.error(res.message);
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error(err.message);
      }
    );
  }
}
