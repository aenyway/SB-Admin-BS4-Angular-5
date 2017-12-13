import { TestBed, inject } from '@angular/core/testing';

import { AgendaModelService } from './agenda-model.service';

describe('AgendaModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendaModelService]
    });
  });

  it('should be created', inject([AgendaModelService], (service: AgendaModelService) => {
    expect(service).toBeTruthy();
  }));
});
