import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  @Input() progress_list;
  displayedColumns: string[] = ["Icon", "name", "progress"]; // table property
  constructor() { }

  ngOnInit(): void {
  }
}