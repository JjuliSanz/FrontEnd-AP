import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/entities/login-user';
import { AuthService } from 'src/app/servicies/auth.service';
import { TokenService } from 'src/app/servicies/token.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUser;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.userName, this.password);
    this.authService.login(this.loginUser).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.userName);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      alert("successfully logged in");
      window.location.reload();
      // this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.message;
      console.log(this.errMsj);

    })
  }
}

