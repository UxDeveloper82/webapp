import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list_items: string[] = [
    "James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas",
    "Christopher", "Charles", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven",
    "Andrew", "Paul", "Joshua", "Kenneth", "Kevin"
  ];


  current_page: number = 1;
  rows: number = 5;

  DisplayList(page: number) {
      const start = this.rows * (page -1);
      const end = start + this.rows;
      return this.list_items.slice(start, end);
  }

  SetupPagination() {
    const page_count = Math.ceil(this.list_items.length / this.rows);
    return Array.from({ length: page_count}, (_,i) => i + 1);
  }

  onPageChange(page: number) {
    this.current_page = page;
  }


}
