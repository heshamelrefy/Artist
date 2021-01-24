import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';



import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  
days:number[]=[]
months:number[]=[]
years:number[]=[]
form:object[]=[]


constructor(private _Router:Router) {
  
this.dayss();
this.monthss();
this.yearss();
}





loginForm=new FormGroup({
  name:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z]{3,8}$/)]),
  lName:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z]{3,8}$/)]),
  password:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required,Validators.email])
  
})
get name(){return this.loginForm.get("name")};
get lName(){return this.loginForm.get("lName")};
get password(){return this.loginForm.get("password")};
get email(){return this.loginForm.get("email")};



flag:boolean=true;  
welcome(){
  if (this.loginForm.valid == true) {
    
    this._Router.navigate(['/created']);
    
     
     
  }
}


   dayss():any {
    for (let i = 1; i <= 31; i++) {
     this.days.push(i)
      
    }
  }
  monthss():any {
    for (let i = 1; i <= 12; i++) {
     this.months.push(i)
      
    }
  }
  yearss():any {
    for (let i = 1900; i <= 2021; i++) {
     this.years.push(i)
      
    }
  }
   

  

  ngOnInit(): void {
  }

}
