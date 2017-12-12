import { TestBed, inject } from '@angular/core/testing';

import { LocationModelService } from './location-model.service';

describe('LocationModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationModelService]
    });
  });

  it('should be created', inject([LocationModelService], (service: LocationModelService) => {
    expect(service).toBeTruthy();
  }));
});
