import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() onChanged = new EventEmitter<boolean>();
  change(increased) {
    this.onChanged.emit(increased);
  }
}
