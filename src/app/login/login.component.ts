import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  email:any;
  Password:any;
  loginForm = new FormGroup({
    /*loginUser: new FormControl('',[Validators.required,Validators.minLength(3)]),*/
    email:new FormControl('',[Validators.required,Validators.email]),
    /*number:new FormControl('',[Validators.required,Validators.minLength(3)]),*/
    Password:new FormControl('',[Validators.required,Validators.minLength(3)]),

  });

  submit()
  {
    let v=
    {
      email:this.email,
      Password:this.Password
    }
    console.log(v);
  }
  
  
 
  
  constructor() {
    
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
  }



