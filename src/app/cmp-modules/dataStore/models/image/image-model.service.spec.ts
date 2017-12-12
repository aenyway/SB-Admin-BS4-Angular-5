import { TestBed, inject } from '@angular/core/testing';

import { ImageModelService } from './image-model.service';

describe('ImageModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageModelService]
    });
  });

  it('should be created', inject([ImageModelService], (service: ImageModelService) => {
    expect(service).toBeTruthy();
  }));
});
