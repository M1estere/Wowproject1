import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login: string;
 password: string;
 entered: boolean;
  constructor() { }

  ngOnInit() {
    this.login = "admin1";
    this.password = "admin1";
    this.entered = false;
  }

  MakeLogin(){
    console.log(this.login);
    console.log(this.password);
    if (this.login === "admin" && this.password === "admin") {
      //Вы админ
      console.log("Все хорошо");
      this.entered = true;
    } else {
      //Какие данные есть
      const pass = localStorage.getItem(this.password);
      const log = localStorage.getItem(this.login);
      //Узнать, есть ли совпадения
      if (log === this.login && pass === this.password){
        console.log("Все хорошо");
        this.entered = true;
      }
    else {
      //Запомнить пользователя
      this.entered = false;
      localStorage.setItem(this.login, this.login);
      localStorage.setItem(this.password, this.password);
    }
    }
  }








}
