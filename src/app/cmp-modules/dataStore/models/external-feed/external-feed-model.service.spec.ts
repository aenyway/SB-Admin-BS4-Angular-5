import {
    inject,
    TestBed
} from '@angular/core/testing';

import { ExternalFeedModelService } from './external-feed-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('ExternalFeedModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ExternalFeedModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([ExternalFeedModelService], (service: ExternalFeedModelService) => {
        expect(service).toBeTruthy();
    }));
});
