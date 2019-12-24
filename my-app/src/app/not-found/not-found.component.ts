import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  currentDate: number = Date.now();
  pi: number = 3.1415;
  Message: string= "Angular is awesome!";
  constructor() { }

  ngOnInit() {
  }

}
