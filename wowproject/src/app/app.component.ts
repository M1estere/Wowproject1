import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   clicks: number = 0;
   onChanged(increased) {
     if (increased) {
       this.clicks = this.clicks + 1;
     } 
     else {
       this.clicks = this.clicks - 1;
     }
   }
}


