import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './Lesson 10.12/home/home.component';
import { AboutComponent } from './Lesson 10.12/about/about.component';
import { NotFoundComponent } from './Lesson 10.12/not-found/not-found.component';
import { ItemComponent } from './Lesson 10.12/item/item.component';
import { ItemDetailsComponent } from './Lesson 10.12/item/item-details/item-details.component';
import { ItemStatComponent } from './Lesson 10.12/item/item-stat/item-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemStatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
