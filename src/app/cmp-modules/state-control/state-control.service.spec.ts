import { TestBed, inject } from '@angular/core/testing';

import { StateControlService } from './state-control.service';

describe('StateControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateControlService]
    });
  });

  it('should be created', inject([StateControlService], (service: StateControlService) => {
    expect(service).toBeTruthy();
  }));
});
