import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Payment} from '../model/payment';

@Injectable()
export class AlertService {
  constructor(private http: Http) {}

  getPayments(): Observable<Payment[]> {
    return this.http
      .get(`api/payments`)
      .map(response => response.json().data);
  }
}
