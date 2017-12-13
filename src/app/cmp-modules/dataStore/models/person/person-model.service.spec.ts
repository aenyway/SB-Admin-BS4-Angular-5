import { TestBed, inject } from '@angular/core/testing';

import { PersonModelService } from './person-model.service';

describe('PersonModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonModelService]
    });
  });

  it('should be created', inject([PersonModelService], (service: PersonModelService) => {
    expect(service).toBeTruthy();
  }));
});
