import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Lesson 10.12/home/home.component';
import { AboutComponent } from './Lesson 10.12/about/about.component';
import { NotFoundComponent } from './Lesson 10.12/not-found/not-found.component';
import { ItemComponent } from './Lesson 10.12/item/item.component';
import { ItemStatComponent } from './Lesson 10.12/item/item-stat/item-stat.component';
import { ItemDetailsComponent } from './Lesson 10.12/item/item-details/item-details.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "item/:id", component:ItemComponent, children: [{path: "details", component: ItemDetailsComponent},
  {path: "stat", component: ItemStatComponent}
] },
  {path: "**", component: NotFoundComponent} /* Две звездочки - любой маршрут */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
