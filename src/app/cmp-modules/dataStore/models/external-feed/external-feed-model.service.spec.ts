import { TestBed, inject } from '@angular/core/testing';

import { ExternalFeedModelService } from './external-feed-model.service';

describe('ExternalFeedModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalFeedModelService]
    });
  });

  it('should be created', inject([ExternalFeedModelService], (service: ExternalFeedModelService) => {
    expect(service).toBeTruthy();
  }));
});
