import { TestBed, inject } from '@angular/core/testing';

import { ContentBlockModelService } from './content-block-model.service';

describe('ContentBlockModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentBlockModelService]
    });
  });

  it('should be created', inject([ContentBlockModelService], (service: ContentBlockModelService) => {
    expect(service).toBeTruthy();
  }));
});
