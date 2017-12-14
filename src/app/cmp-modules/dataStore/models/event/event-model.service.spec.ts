import {
    inject,
    TestBed
} from '@angular/core/testing';

import { EventModelService } from './event-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('EventModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([EventModelService], (service: EventModelService) => {
        expect(service).toBeTruthy();
    }));
});
