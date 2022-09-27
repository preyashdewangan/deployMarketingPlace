import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /*loginName!: string;
  loginEmail: string | undefined;
  numBer!: number;
  whatsApp!: number;
  pinCode!: number;*/
 /*Userlist=["Name","phone_no","Email","Password"];*/

 userlist:any=[
  {
    "Name":"Preyash",
    "phone_no":"1234567895",
    "Email":"Kumarpreyash6@gmail.com",
    "Password":"1234"
  },
  {
    "Name":"Rahul",
    "phone_no":"8103706382",
    "Email":"dewanganRahul22@gmail.com",
    "Password":"3145"
  },
  {
    "Name":"Kehkasa",
    "phone_no":"9752319781",
    "Email":"afrozKehkasa27@gmail.com",
    "Password":"8769"
  },
  {
    "Name":"Mashuma",
    "phone_no":"9109383773",
    "Email":"AfrozMau27@gmail.com",
    "Password":"9245"
  },
  {
    "Name":"Kehkasa",
    "phone_no":"8889377815",
    "Email":"Dewanganprithvi18@gmail.com",
    "Password":"6752"
  },
  {
    "Name":"Preyash",
    "phone_no":"8794678289",
    "Email":"sahooGold31@gmail.com",
    "Password":"7546"
  },
  {
    "Name":"Kehkasa",
    "phone_no":"9876543213",
    "Email":"sahooaman76@gmail,com",
    "Password":"5463"
  },
  {
    "Name":"Vidhi",
    "phone_no":"7987979273",
    "Email":"SawaiVidhi7@gmail.com",
    "Password":"8975"
  },
  {
    "Name":"Raksha",
    "phone_no":"7689898938",
    "Email":"SharmaRaksha91@gmail.com",
    "Password":"8748"
  },
  {
    "Name":"Preyash",
    "phone_no":"9899844839",
    "Email":"VermaPrachi76@gmail.com",
    "Password":"9192"
  }
  
  

 ]
  loginForm = new FormGroup({
    loginUser: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    number:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Password:new FormControl('',[Validators.required,Validators.minLength(3)]),

  });
   name:any='Preyash';
 /* register= {
    loginUser: '',
    loginPassword: '',
  };*/
  
 
  /*register=
  {
    loginUser:'',
    loginEmail:'',
    loginnumber:'',
    loginPassword:''
  }
  */
 
  constructor() {
    
    
}
  /*ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setData(){
    const v= {
      loginName:this.loginName, 
      loginEmail:this.loginEmail, 
      numBer:this. numBer,
      whatsApp:this. whatsApp,
      pinCode:this.pinCode


    }
    console.log(v);
  }*/
   

 ngOnInit(): void {
   /* this.loginForm = this.FormBuilder.group({
      loginUser: ['', Validators.required],
      loginEmail: ['', Validators.required, Validators.email],
      loginnumber: ['', Validators.required],
      loginPassword: ['', [Validators.required]],
      
  
    });*/
  }
  /*get f(): { [key: string]: AbstractControl } {
    return this.loginform.controls;
  }*/
  get f()
  {

   
    this.loginForm.value;
  /* var data=
    {
    loginUser:this.register.loginUser,
   loginEmail:this.register.loginEmail,
    loginnumber:this.register.loginnumber,
    loginPassword:this.register.loginPassword,
    
    }*/
  return this.loginForm.controls;
  }
 submit()
 {
  console.log(this.loginForm.valid);
 }
 /*setData(){
  const v= {
    loginName:this.loginName, 
    loginEmail:this.loginEmail, 
    numBer:this. numBer,
    whatsApp:this. whatsApp,
    pinCode:this.pinCode,
  }
  console.log(v);

  }*/

}
 
 