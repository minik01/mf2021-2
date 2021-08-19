import {TestBed} from '@angular/core/testing';

import {EventPlanService} from './event-plan.service';
import {DolEventPlan} from '../model/DolEventPlan';

describe('EventPlanService', () => {
  let service: EventPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('plan should contains some meetings', () => {
    service.getPlan().subscribe((plan: DolEventPlan) => {
      expect(typeof plan.meetings).toBe(typeof []);

    });
  });

});
