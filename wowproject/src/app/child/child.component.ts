import { Component, OnInit, Input } from '@angular/core';
import { Agent } from 'http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name="Евгений";
 @Input() userName: string;
 _userAge: number;


 @Input()
 set userAge(age: number) {
 if ( age < 0 ) {
   this._userAge = 0;
 }
 else if (age > 100) {
   this._userAge=100;
 }
 else {
   this._userAge = age;
 }

}
get userAge() {
  return this._userAge;
}
  constructor() { }

  ngOnInit() {
  }

}
