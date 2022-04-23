import { Component, OnInit } from '@angular/core';
import { SearchModelService } from '../search/search-model.service';
import { SearchModel } from '../search/search-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  categoryResults: any[] = [];
  categoryString: string = "";
  searchModel = new SearchModel();

  constructor(private searchModelService: SearchModelService, private router: Router) { }

  ngOnInit(): void {
    // this.searchModelService.storeSearchInSearchModel(this.searchModel);
    // this.searchQueryString = this.searchModel.getSearchQueryString();
    this.getJokesCategories();
  }


  getJokesCategories(): void {
    this.searchModelService.getJokesCategories().subscribe(
      (resp: any) => {
            if(Array.isArray(resp)){
              this.categoryResults = resp;
              console.log('=2=> ', resp);
              // this.searchModel.repoName = resp[0].repoName;
              // this.searchModel.setSearchQueryString( resp[0].searchQueryString );
              // this.searchModel.setSearchQueryString( this.searchModel.getSearchQueryString() );
            }
            // this.searchModelService.storeSearchInLocalStorage(this.searchModel);
      }
    );
    }


    doRandomJokesUsingCategory(category: string): void {
      if(this.searchModel !== undefined){
        this.searchModel.setCategoryString( category );
      this.searchModelService.storeCategoryStringInLocalStorage(this.searchModel);
      this.router.navigate(['/categorydetail']);
      }
    }

}
