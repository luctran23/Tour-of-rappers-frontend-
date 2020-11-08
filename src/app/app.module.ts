import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RappersComponent } from './rappers/rappers.component';
import { HttpClientModule } from '@angular/common/http';
import { RapperDetailComponent } from './rapper-detail/rapper-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RappersComponent,
    RapperDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
