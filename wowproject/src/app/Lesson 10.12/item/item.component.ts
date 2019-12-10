import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 id: number;
 sub: Subscription; /*Изменение параметров маршрута */
 constructor(private activeRoute: ActivatedRoute) {
   //this.id = activeRoute.snapshot.params["id"];
   this.sub = activeRoute.params.subscribe( params => this.id = params['id'] );
  }

  ngOnInit() {
  }

}
