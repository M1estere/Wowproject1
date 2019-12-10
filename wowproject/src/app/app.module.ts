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

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ItemComponent
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
