import { Component, OnInit } from '@angular/core';
import { SearchModelService } from '../search/search-model.service';
import { SearchModel } from '../search/search-model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.css']
})
export class CategoryDetailPageComponent implements OnInit {

  
  jokesResults: any;
  categoryString: string = "";
  searchModel = new SearchModel();

  constructor(private searchModelService: SearchModelService, private router: Router) { }

  ngOnInit(): void {
    this.searchModelService.storeCategoryStringInSearchModel(this.searchModel);
    this.categoryString = this.searchModel.getCategoryString();
    this.getCategoryDetails();
  }


  getCategoryDetails(): void {
    this.searchModelService.getRandomCategoryDetails(this.searchModel.getCategoryString()).subscribe(
      (resp: any) => {
              this.jokesResults = resp;
              console.log('=3=> ', resp);
              this.searchModel.setCategoryString( this.searchModel.getCategoryString() );

            this.searchModelService.storeCategoryStringInLocalStorage(this.searchModel);
      }
    );
    }


}
