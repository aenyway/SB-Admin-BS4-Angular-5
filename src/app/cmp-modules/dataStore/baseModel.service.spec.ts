import {
    inject,
    TestBed
} from '@angular/core/testing';

import { BaseModelService } from './baseModel.service';

describe('DatastoreService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BaseModelService]
        });
    });

    it('should be created', inject([BaseModelService], (service: BaseModelService) => {
        expect(service).toBeTruthy();
    }));
});
