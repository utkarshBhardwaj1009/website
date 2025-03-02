import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleSiteVisitComponent } from './schedule-site-visit/schedule-site-visit.component';

const routes: Routes = [
  { path: 'schedule-visit', component: ScheduleSiteVisitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
