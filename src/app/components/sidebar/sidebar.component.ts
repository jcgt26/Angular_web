import { Component, OnInit } from '@angular/core';
// import { menuList } from './menu-list';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  collapse = true;
  toggleSidebar() {
    this.collapse = !this.collapse;
  }

}
