import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import {MainPageComponent} from '../app/page/main-page/main-page.component';
import {ProgramComponent} from '../app/page/program/program.component';
import {CalendarComponent} from '../app/page/calendar/calendar.component';
import {AttandComponent} from '../app/page/attand/attand.component';
const routes: Routes = [
  { path: TAGS.MAINPAGE, component: MainPageComponent },
  { path: TAGS.PROGRAM, component: ProgramComponent , data: { title: '오늘의 프로그램'}},
  { path: TAGS.CALENDAR, component: CalendarComponent, data: { title: '출석부'} },
  { path: TAGS.ATTAND, component: AttandComponent, data: { title: '출석부 명단'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
