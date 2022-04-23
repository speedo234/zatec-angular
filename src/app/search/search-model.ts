export class SearchModel {

    
    public searchQueryString: string;


    constructor(){
        this.searchQueryString = "";
    	}


    
    getSearchQueryString(){
        return this.searchQueryString;
    }

    setSearchQueryString(searchQueryString: string){
        this.searchQueryString = searchQueryString;
    }



}
