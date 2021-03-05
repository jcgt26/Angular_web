import { Injectable } from '@angular/core';
import {Observable, of} from  "rxjs"
import {Quote} from "../models/quote"
import {quote_list} from "../mocks/quotes"



@Injectable({
  providedIn: 'root'
})
export class QuotesService { 
  constructor() { }

  get_quotes(): Observable<Quote[]>{
    // const quotes = of (quote_list);
    return of (quote_list)
  }
}
