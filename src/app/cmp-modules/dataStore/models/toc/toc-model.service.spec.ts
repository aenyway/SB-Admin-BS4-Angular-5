import {
    inject,
    TestBed
} from '@angular/core/testing';

import { TocModelService } from './toc-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('TocModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TocModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([TocModelService], (service: TocModelService) => {
        expect(service).toBeTruthy();
    }));
});
