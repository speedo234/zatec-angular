import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from '../search/search-model';
import { SearchModelService } from '../search/search-model.service';



@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  searchModel = new SearchModel();

  constructor(private searchModelService: SearchModelService, private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(): void {
    if(this.searchModel.getSearchQueryString() !== undefined){
    this.searchModelService.storeSearchInLocalStorage(this.searchModel);
    // this.router.navigate(['/repos']);
    this.router.navigate(['/search']);
    }
  }

}
