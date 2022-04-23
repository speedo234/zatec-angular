export class SearchModel {

    
    public searchQueryString: string;

    public categoryString: string;


    constructor(){
        this.searchQueryString = "";
        this.categoryString = "";
    	}

    
    getSearchQueryString(){
        return this.searchQueryString;
    }

    setSearchQueryString(searchQueryString: string){
        this.searchQueryString = searchQueryString;
    }

    getCategoryString(){
        return this.categoryString;
    }

    setCategoryString(categoryString: string){
        this.categoryString = categoryString;
    }



}
