import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HeadingComponent } from './heading/heading.component';
import { ContentComponent } from './content/content.component';
import { ButtonComponent } from './button/button.component';
import { PrevComponent } from './prev/prev.component';
import { NextComponent } from './next/next.component';
import { CustomerConsentComponent } from './customer-consent/customer-consent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    HeadingComponent,
    ContentComponent,
    ButtonComponent,
    PrevComponent,
    NextComponent,
    CustomerConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
