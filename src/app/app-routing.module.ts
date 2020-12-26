import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './HomePage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {QuestionsComponent} from './questions/questions.component'

const routes: Routes = [
  {
    path:'about',
  component: AboutComponent} ,
{
  path:'home',
  component:HomePageComponent
},
{
  path:'questions',
component: QuestionsComponent} ,
{
  path: '**',
  component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
