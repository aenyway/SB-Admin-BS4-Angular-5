import { TestBed, inject } from '@angular/core/testing';

import { ArticleModelService } from './article-model.service';

describe('ArticleModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleModelService]
    });
  });

  it('should be created', inject([ArticleModelService], (service: ArticleModelService) => {
    expect(service).toBeTruthy();
  }));
});
