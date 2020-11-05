import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AppErrorHandler, HandleError} from  './../app-error-handler';


@Injectable({
  providedIn: 'root'
})
export class ExecutiveComTrendsService {

  baseurl = environment.baseurl;
  private handleError:HandleError;
  public headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  

  constructor(private httpClient: HttpClient,appErrorHandler: AppErrorHandler) {
    this.handleError = appErrorHandler.createHandleError('ExecutiveComTrendsService');
  }
  
  // getExecutiveDetails(): Observable<any> {
  //   const url = this.baseurl + '/transparency/commitments';
  //   return this.httpClient.request('get', url, { 'headers': this.headers })
  //   .pipe(
  //     catchError(this.handleError('ExecutiveComTrendsService', []))
  //   );
  // }
}
