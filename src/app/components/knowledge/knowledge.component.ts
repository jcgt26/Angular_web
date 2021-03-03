import { Component, OnInit, Input } from '@angular/core';
// import { progress_data } from 'src/app/mocks/progress_data';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  @Input() progress_list;
  displayedColumns: string[] = ["Icon","name" , "progress"];
  constructor() { }

  ngOnInit(): void {
  }
}