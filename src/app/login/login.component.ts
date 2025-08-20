import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _DataService:DataService,private _Router:Router){
  }
loginForm=new FormGroup({
  username:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  password:new FormControl(null,[Validators.required,Validators.minLength(5)])
})

onSubmit(){
  console.log(this.loginForm);
  this._DataService.login(this.loginForm.value).subscribe((x)=>{

     if(x.error==undefined){
        this._Router.navigate(['/category']);
        console.log("success")
        this._DataService.islogined.next(true);
     }else{
      alert("please enter valid username and password");
      console.log("error")
     }

  })
}
}
