import { Component, OnInit } from '@angular/core';

// -----------MODELS
import { Quote } from '../../models/quote';
import { Progress } from '../../models/progress';


// -----SERVICES
import { ProgressService } from "../../services/progress.service"
import { QuotesService } from 'src/app/services/quotes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  quotes: Quote[] = [];
  progress_list: Progress[] = [];
  
  
  constructor(private progress_service: ProgressService, private quotes_service: QuotesService) { }

  ngOnInit(): void {
    this.get_progress();
    this.get_quotes();
  }

  get_progress(): void {
    this.progress_service.get_progress().subscribe(progress => {
      this.progress_list = progress;
    });
  }
  get_quotes(): void {
    this.quotes_service.get_quotes().subscribe(quotes => {
      this.quotes = quotes;
    });
  }

}
