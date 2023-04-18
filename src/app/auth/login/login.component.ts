import { LoginRequestPayload } from './LoginRequestPayload';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  loginForm:FormGroup|any;
  public isError: boolean = true;

  loginRequestPayload:SignupRequestPayload | any ;
  
  constructor(private authService:AuthService) {
    this.loginRequestPayload ={
      email:'',
      password:''
    };
   }

 
  
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    })

    
  }

  login(){
    this.loginRequestPayload.email = this.loginForm.get('email').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe(
      (response) => {
        // login success logic
       console.log('Login successful');
       this.isError=true;
        
      },
      (error) => {
        this.isError=false;
      }

    );

    

   }
  
}
 