import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.sass']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Input() pos: number;
  @Output() rankChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() removeQuote: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.quote);
  }

  addVote(vote: number) : void {
    this.quote.rank += vote;
    this.rankChange.emit();
  }

  deleteQuote() :void {
    this.removeQuote.emit(this.pos);
  }

}
