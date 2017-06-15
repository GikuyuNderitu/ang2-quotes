import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteNewComponent } from './quotes/quote-new/quote-new.component';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';
import { QuoteDetailComponent } from './quotes/quote-list/quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteNewComponent,
    QuoteListComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
