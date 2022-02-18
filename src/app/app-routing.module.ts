import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms/cms.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "men", component: MenComponent},
  {path: "women", component: RegisterComponent},
  {path: "cms", component: CmsComponent},
  {path: "search", component: SearchComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
