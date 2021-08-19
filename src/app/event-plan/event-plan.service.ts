import {Injectable} from '@angular/core';
import {DolEventPlan} from '../model/DolEventPlan';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventPlanService {

  private eventPlan: DolEventPlan = {meetings: []};

  constructor() {

  }

  public getPlan(): Observable<DolEventPlan> {
    return of(this.eventPlan );
  }
}
