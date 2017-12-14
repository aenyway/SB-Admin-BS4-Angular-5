import {
    inject,
    TestBed
} from '@angular/core/testing';

import { ContentBlockModelService } from './content-block-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('ContentBlockModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ContentBlockModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([ContentBlockModelService], (service: ContentBlockModelService) => {
        expect(service).toBeTruthy();
    }));
});
