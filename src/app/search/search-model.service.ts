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

  private jokesCategoriesUrl = this.baseUrl+'/chuck/categories';

  private randomJokesFromCategoryUrl = 'https://api.chucknorris.io/jokes/random?category=';

  // private getCommitsUrl = this.baseUrl+'/api/commits';

  constructor(private _http: HttpClient, private router: Router) { 

  }

  doSearch(searchQueryString: string) {
    return this._http.get(this.searchUrl+'/'+searchQueryString);
  }

  getJokesCategories() {
    return this._http.get(this.jokesCategoriesUrl);
  }

  getRandomCategoryDetails(categoryString: string) {
    console.log('==>>- ', this.randomJokesFromCategoryUrl + categoryString);
    return this._http.get(this.randomJokesFromCategoryUrl + categoryString);
  }


  // getCommits(searchModel: SearchModel) {
  //   return this._http.get(this.getCommitsUrl+'/'+searchModel.username+'/'+searchModel.repoName);
  // }


  storeSearchInLocalStorage(searchModel: SearchModel){
    if(searchModel.getSearchQueryString() !== undefined){
      localStorage.setItem('searchQueryString', searchModel.getSearchQueryString() );
    }
  }

  storeSearchInSearchModel(searchModel: SearchModel){
    if(localStorage.getItem('searchQueryString') != null){
      searchModel.setSearchQueryString( localStorage.getItem('searchQueryString')! );
    }else{
      localStorage.removeItem('searchQueryString');
    }
  }

  // 

  storeCategoryStringInLocalStorage(searchModel: SearchModel){
    if(searchModel.getCategoryString() !== undefined){
      localStorage.setItem('categoryString', searchModel.getCategoryString() );
    }
  }

  storeCategoryStringInSearchModel(searchModel: SearchModel){
    if(localStorage.getItem('categoryString') != null){
      searchModel.setCategoryString( localStorage.getItem('categoryString')! );
    }else{
      localStorage.removeItem('categoryString');
    }
  }

}
