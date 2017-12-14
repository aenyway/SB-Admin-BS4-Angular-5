import {
    inject,
    TestBed
} from '@angular/core/testing';

import { CarModelService } from './car-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('CarModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CarModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([CarModelService], (service: CarModelService) => {
        expect(service).toBeTruthy();
    }));
});
