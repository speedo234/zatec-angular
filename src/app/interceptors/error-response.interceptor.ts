import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';

import { MessageService } from '../message/message.service';



@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router, private messageService: MessageService) {}


  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle(request)
        .pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                let message = '';
                console.log('ayam');
                if (error.error instanceof ErrorEvent) {
                    // handle client-side error
                    message = `Error: ${error.error.message}`;
                } else {
                    // handle server-side error
                    message = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    
                  if( error.error.status !== 200 || error.error.status !== 204 ){
                    console.log('error==> ', error);

                    if(error.error.error !== undefined){
                      this.messageService.message = error.error.error;
                    }else{
                      // this.messageService.message = error.error.error;
                    }
                    

                    
                    ;
                    
                    this.router.navigate(['/message']);
                  }
                }
                return throwError(message);
            })
        )
}
}
