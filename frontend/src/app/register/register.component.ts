import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(public apiService: ApiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      cPassword: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  register(data) {
    this.apiService.register(data).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message === 'Register successful') {
          this.toastr.success(res.message);
          this.router.navigate(['/login']);
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
