import { TestBed, inject } from '@angular/core/testing';

import { RouteModelService } from './route-model.service';

describe('RouteModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteModelService]
    });
  });

  it('should be created', inject([RouteModelService], (service: RouteModelService) => {
    expect(service).toBeTruthy();
  }));
});
