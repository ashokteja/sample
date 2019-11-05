import { Component, OnInit } from '@angular/core';
import {BridgeService} from '../bridge.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name= '';
  constructor( private bridgeService:BridgeService) { }
  ngOnInit() {
  }

  onSubmit(){
    this.bridgeService.sendMessage(this.name);
  }

}
