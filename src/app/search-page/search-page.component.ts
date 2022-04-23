import { Component, OnInit } from '@angular/core';
import { SearchModelService } from '../search/search-model.service';
import { SearchModel } from '../search/search-model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchResults: any[] = [];
  searchQueryString: string = "";
  searchModel = new SearchModel();

  constructor(private searchModelService: SearchModelService, private router: Router) { }

  ngOnInit(): void {
    this.searchModelService.storeSearchInSearchModel(this.searchModel);
    this.searchQueryString = this.searchModel.getSearchQueryString();
    this.getSearchResults();
  }


  getSearchResults(): void {
    this.searchModelService.doSearch(this.searchModel.getSearchQueryString()).subscribe(
      (resp: any) => {
            if(Array.isArray(resp)){
              this.searchResults = resp;
              console.log('=1=> ', resp);
              // this.searchModel.repoName = resp[0].repoName;
              // this.searchModel.setSearchQueryString( resp[0].searchQueryString );
              this.searchModel.setSearchQueryString( this.searchModel.getSearchQueryString() );
            }
            this.searchModelService.storeSearchInLocalStorage(this.searchModel);
      }
    );
    }



    // doCommits(searchResult: any): void {
    //   if(this.searchModel !== undefined){
    //     this.searchModel.repoName = searchResult.repoName;
    //   this.searchModelService.storeSearchInLocalStorage(this.searchModel);
    //   this.router.navigate(['/commits']);
    //   }
    // }



}
