import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor() { }

  private subject = new Subject<any>();
  private asObservable = this.subject.asObservable();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    getMessage(): Observable<any> {
        return this.asObservable;
    }

}
