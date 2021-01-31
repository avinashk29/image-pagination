import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  onSearch(){
    localStorage.setItem('keyword' , this.keyword)
    this.router.navigate([''] , { queryParams: {page: 1, limit: 20}});
  }
}
