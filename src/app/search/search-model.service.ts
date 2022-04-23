import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchModel } from './search-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchModelService {


  searchResults: any[] = [];

  private baseUrl = environment.production ? 'http://localhost:8093': 'http://localhost:8093';

  private searchUrl = this.baseUrl+'/search';

  private getCommitsUrl = this.baseUrl+'/api/commits';

  constructor(private _http: HttpClient, private router: Router) { 

  }

  doSearch(searchQueryString: string) {
    return this._http.get(this.searchUrl+'/'+searchQueryString);
  }


  // getCommits(searchModel: SearchModel) {
  //   return this._http.get(this.getCommitsUrl+'/'+searchModel.username+'/'+searchModel.repoName);
  // }


  storeSearchInLocalStorage(searchModel: SearchModel){
    if(searchModel.getSearchQueryString() !== undefined){
      // localStorage.setItem('username', searchModel.username);
      localStorage.setItem('searchQueryString', searchModel.getSearchQueryString() );
    }
  }

  storeSearchInSearchModel(searchModel: SearchModel){
    if(localStorage.getItem('searchQueryString') != null){
      // searchModel.username = localStorage.getItem('username')!;
      searchModel.setSearchQueryString( localStorage.getItem('searchQueryString')! );
    }else{
      localStorage.removeItem('searchQueryString');
    }
  }

}
