import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import {MainPageComponent} from '../app/page/main-page/main-page.component';
import {ProgramComponent} from '../app/page/program/program.component';
const routes: Routes = [
  { path: TAGS.MAINPAGE, component: MainPageComponent },
  { path: TAGS.PROGRAM, component: ProgramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
