import { TestBed, inject } from '@angular/core/testing';

import { CarModelService } from './car-model.service';

describe('CarModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarModelService]
    });
  });

  it('should be created', inject([CarModelService], (service: CarModelService) => {
    expect(service).toBeTruthy();
  }));
});
