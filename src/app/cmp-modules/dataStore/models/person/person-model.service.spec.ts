import {
    inject,
    TestBed
} from '@angular/core/testing';

import { PersonModelService } from './person-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('PersonModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PersonModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([PersonModelService], (service: PersonModelService) => {
        expect(service).toBeTruthy();
    }));
});
