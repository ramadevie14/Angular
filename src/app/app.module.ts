import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public-components/home/home.component';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';

import { Token } from '@angular/compiler';
import { counterFactory } from './shared/services/counter.factory';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule, 
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
   
  ],
 
  providers: [
    counterFactory,
    TestService,
    {provide : 'apptitle', useValue:{title:'this is the title', description : 'this is the description'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
