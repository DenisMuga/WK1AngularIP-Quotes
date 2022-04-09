import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightsDirective } from './highlights.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    HighlightsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, QuotesComponent]  
})
export class AppModule { }
