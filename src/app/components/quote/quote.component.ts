import { Component, OnInit , Input} from '@angular/core';
import {Quote} from '../../models/Quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
@Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
