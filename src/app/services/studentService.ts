import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AppErrorHandler, HandleError} from  './../app-error-handler';
import 'rxjs/add/operator/map';

@Injectable()
export class studentService{

  private handleError:HandleError;

    constructor(private http: HttpClient,appErrorHandler: AppErrorHandler){
      this.handleError = appErrorHandler.createHandleError('studentService');
    }

      searchNames(): Observable<any[]>{  
        return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
        .pipe(
          catchError(this.handleError('searchNames', []))
        );
      }
}

