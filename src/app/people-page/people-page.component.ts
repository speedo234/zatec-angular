import { Component, OnInit } from '@angular/core';
import { SearchModelService } from '../search/search-model.service';
import { SearchModel } from '../search/search-model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  peopleResults: any[] = [];
  // categoryString: string = "";
  searchModel = new SearchModel();

  constructor(private searchModelService: SearchModelService, private router: Router) { }

  ngOnInit(): void {
    this.getPeople();
  }


  getPeople(): void {
    this.searchModelService.getPeople().subscribe(
      (resp: any) => {
            if(Array.isArray(resp)){
              this.peopleResults = resp;
              console.log('=5=> ', resp);
            }
      }
    );
    }


    doGetPeople(category: string): void {
      if(this.searchModel !== undefined){
        this.searchModel.setCategoryString( category );
      this.searchModelService.storeCategoryStringInLocalStorage(this.searchModel);
      this.router.navigate(['/categorydetail']);
      }
    }

}
