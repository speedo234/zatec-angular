import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { SearchPageComponent } from './search-page/search-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryDetailPageComponent } from './category-detail-page/category-detail-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { MessageComponent } from './message/message.component';
import { ErrorResponseInterceptor } from './interceptors/error-response.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    SearchPageComponent,
    CategoryPageComponent,
    CategoryDetailPageComponent,
    PeoplePageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
    useClass: ErrorResponseInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
