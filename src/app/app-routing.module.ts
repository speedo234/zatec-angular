import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailPageComponent } from './category-detail-page/category-detail-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { SearchPageComponent } from './search-page/search-page.component';



const routes: Routes = [


  {path: "", 
redirectTo: "/index", 
pathMatch: "full"},

{
  path: "index", 
component: IndexPageComponent
},

{
  path: "search", 
component: SearchPageComponent
},

{
  path: "category", 
component: CategoryPageComponent
},

{
  path: "categorydetail", 
component: CategoryDetailPageComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
