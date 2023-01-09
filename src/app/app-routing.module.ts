import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

const routes: Routes = [
  {
    path: "", component: Component1Component,pathMatch:"full"
  },
  {
    path: "pag", component: Component2Component,pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
