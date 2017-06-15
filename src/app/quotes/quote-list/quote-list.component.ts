import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.sass']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: Array<Quote>;
  @Output() rankChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() removeQuote: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
}
