import {
    inject,
    TestBed
} from '@angular/core/testing';

import { RouteModelService } from './route-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('RouteModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RouteModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([RouteModelService], (service: RouteModelService) => {
        expect(service).toBeTruthy();
    }));
});
