import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { userManagementData } from '../../../../../static-data/user-management-data'

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  login_form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.login_form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.login_form.status == "VALID") {
      localStorage.clear();
      var Check = userManagementData.find(c => c.email === this.login_form.value.email);
      if(Check)
      {
        if(Check.password == this.login_form.value.password)
        {
          localStorage.setItem('FullName', Check.name);
          localStorage.setItem('Role', Check.role);
          localStorage.setItem('LoginEmail', Check.email);
          this.router.navigate(['/bc-check']);
          this.snackbar.open('log in successfully', '', { duration: 10000 });
        }
        else
        {
          this.snackbar.open('Incorrect Password, Please try again.', '', { duration: 10000 });
        }
      }
      else
      {
        this.snackbar.open('Incorrect login details. Please try again.', '', { duration: 10000 });
      }
    }
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
