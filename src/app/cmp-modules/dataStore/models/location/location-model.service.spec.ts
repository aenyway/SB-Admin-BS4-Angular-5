import {
    inject,
    TestBed
} from '@angular/core/testing';

import { LocationModelService } from './location-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('LocationModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocationModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([LocationModelService], (service: LocationModelService) => {
        expect(service).toBeTruthy();
    }));
});
