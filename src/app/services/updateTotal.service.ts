import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Payment } from '../model/payment';

@Injectable({ providedIn: 'root' })
export class UpdateTotalService {
    private subject = new Subject<any>();

    sendMessage(payment: Payment) {
        this.subject.next(payment);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}