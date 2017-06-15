import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.sass']
})
export class QuoteNewComponent implements OnInit {

  private newQuote = new Quote();
  @Output() addQuote: EventEmitter<Quote> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.addQuote.emit(this.newQuote);
    form.reset();
  }

}
