import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private loginservice : LoginService , private router:Router, private formBuilder: FormBuilder ) { }
  loginForm:FormGroup;
  email:String;
  Password:String

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  loginModel = new User()
  mensagem =""

onSubmit(){
  console.log(this.loginModel)

 this.loginservice.login(this.loginModel).subscribe((response) => {
   this.router.navigateByUrl("") 
 }, (respostaErro) => {
   this.mensagem = respostaErro.error
   console.log(this.mensagem)
 
 })
}
}
