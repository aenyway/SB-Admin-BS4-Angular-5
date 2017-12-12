import { TestBed, inject } from '@angular/core/testing';

import { TocModelService } from './toc-model.service';

describe('TocModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TocModelService]
    });
  });

  it('should be created', inject([TocModelService], (service: TocModelService) => {
    expect(service).toBeTruthy();
  }));
});
