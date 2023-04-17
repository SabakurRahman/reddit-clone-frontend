import { AuthService } from './../shared/auth.service';
import { SignupRequestPayload } from './signup-request.payload';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm: FormGroup | any;
  signupRequestPayload:SignupRequestPayload | any ;
  
  constructor(private authService:AuthService) {
    this.signupRequestPayload ={
      username:'',
      email:'',
      password:''
    };
   }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    });
  }

  signup(){
    this.signupRequestPayload.username=this.signupForm.get('username').value;
    this.signupRequestPayload.email=this.signupForm.get('email').value;
    this.signupRequestPayload.password=this.signupForm.get('password').value;

    this.authService.signUp(this.signupRequestPayload)
    .subscribe(data =>{
     console.log(data);
    });
    
    
  }

}