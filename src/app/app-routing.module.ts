import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RappersComponent } from './rappers/rappers.component';
import { RapperDetailComponent } from './rapper-detail/rapper-detail.component';


const routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'rappers', component: RappersComponent},
  { path: 'rappers/:id', component: RapperDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
