import { Component, OnInit } from '@angular/core';
import {Quote} from '../../models/Quote';
import {Progress} from '../../models/Progress';
import {quote_list} from '../../mocks/quotes';
import {progress_data} from '../../mocks/progress_data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quotes: Quote[] = quote_list;
  progress_list: Progress[] = progress_data;
  constructor() { }

  ngOnInit(): void {

    
  }

}
