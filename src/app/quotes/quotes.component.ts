import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.sass']
})
export class QuotesComponent implements OnInit {
  private quotes: Array<Quote> = [
    new Quote("Hello from many a place, hello!", "Suzie Q" )
  ];

  constructor() { }

  ngOnInit() {
  }

  addQuote(newQuote) {
    this.quotes.push(new Quote(newQuote.message, newQuote.author));
    this.sort()
  }

  sort() {
    this.quotes.sort((a, b) => b.rank - a.rank);
  }

  removeQuote(idx) {
    this.quotes.splice(idx, 1);
  }


}
