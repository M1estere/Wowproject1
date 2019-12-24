import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login: string;
 password: string;
  constructor() { }

  ngOnInit() {
    this.login = "admin1";
    this.password = "admin1";
  }

  MakeLogin(){
    console.log(this.login);
    console.log(this.password);
    if (this.login == "admin" && this.password == "admin") {
      console.log("Все хорошо");
    }
  }




}
