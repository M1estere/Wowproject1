import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() userName: string;
@Output() userNameChange=new EventEmitter<string>();
onNameChange(newName: string){
  this.userName = newName;
  this.userNameChange.emit(newName);
 }
}
