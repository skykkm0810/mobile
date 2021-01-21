import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import {MainPageComponent} from '../app/page/main-page/main-page.component';
import {ProgramComponent} from '../app/page/program/program.component';
import {CalendarComponent} from '../app/page/calendar/calendar.component';
import {AttandComponent} from '../app/page/attand/attand.component';
import {MedicineComponent} from '../app/page/medicine/medicine.component';
import {SeniorListComponent} from '../app/page/senior-list/senior-list.component';
import {LoginComponent} from '../app/layout/login/login.component';
import {FeedMedicineComponent} from '../app/page/feed-medicine/feed-medicine.component';
import {ConfirmComponent} from '../app/page/confirm/confirm.component';
import {CompleteComponent} from '../app/page/complete/complete.component';
import {Complete2Component} from '../app/page/complete2/complete2.component';
const routes: Routes = [
  { path: TAGS.MAINPAGE, component: MainPageComponent },
  { path: TAGS.PROGRAM, component: ProgramComponent , data: { title: '오늘의 프로그램'}},
  { path: TAGS.CALENDAR, component: CalendarComponent, data: { title: '출석부'} },
  { path: TAGS.ATTAND, component: AttandComponent, data: { title: '출석부 명단'} },
  { path: TAGS.MEDICINE, component: MedicineComponent, data: { title: '투약일지'} },
  { path: TAGS.SENIORLIST, component: SeniorListComponent, data: { title: '어르신 명단'} },
  { path: TAGS.LOGIN, component: LoginComponent },
  { path: TAGS.FEED, component: FeedMedicineComponent },
  { path: TAGS.CONFIRM, component: ConfirmComponent },
  { path: TAGS.FEEDOK, component: CompleteComponent },
  { path: TAGS.ATTENDOK, component: Complete2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
