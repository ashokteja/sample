import { Component, OnInit,OnDestroy  } from '@angular/core';
import {BridgeService} from '../bridge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  messages: any[] = [];
  subscription: Subscription;
  constructor( private bridgeService:BridgeService) { 

    this.subscription = this.bridgeService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        console.log(this.messages)
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });




  }




  

  ngOnInit() {
  }

}
