import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit 
{
  title!:string;
  myfirst='preyash';
 setout(param1: string) 
 {
  this.title=param1;
 }
  preyash=true;
  LoginName!:string;
  LoginEmail!:string;
  LoginNo!:number;
  LoginPassword!:string
  loginName!:string;
  loginPassword!:string;
  setplay() 
  {
    const v =
    {
      loginName:this.loginName,
      loginPassword:this.loginPassword,
    } 
    console.log(v);

  }
display() 
{
  this.preyash=!this.preyash;
}
userlist=[{'name':'preyash','lastname':'dewangan'},
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
}]

  /*count=0;
  new="preyash";
  color='green';
  change() 
  {
    this.color='red';
  }
  userlist=['preyash','kumar','dewangan'];
  users=[{'name':'preyash','phoneno':'8103706382','email':'kumarpreyash6@gmail.com'},
  {'name':'preyash','phoneno':'8103706382','email':'kumarpreyash6@gmail.com'},
  {'name':'preyash','phoneno':'8103706382','email':'kumarpreyash6@gmail.com'}
]
  counter1()
{
  this.count++;
}
counter2()
{
  this.count--!=-1;
}
name="preyash";*/
disabled=false;

  constructor() {
    
   }

  ngOnInit(): void {
  }
     setData ()
   {
    var data =
    {
     LoginName:this.LoginName,
     LoginPassword:this.LoginPassword,
    }
    console.log(data);
   }
  }





function setData() {
  throw new Error('Function not implemented.');
}

