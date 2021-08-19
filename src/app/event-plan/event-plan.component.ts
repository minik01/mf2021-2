import { Component, OnInit } from '@angular/core';
import {EventPlanService} from './event-plan.service';

@Component({
  selector: 'dol-event-plan',
  templateUrl: './event-plan.component.html',
  styleUrls: ['./event-plan.component.css']
})
export class EventPlanComponent implements OnInit {

  constructor(private eventPlanService: EventPlanService) { }

  ngOnInit(): void {
  }

}
