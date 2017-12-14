import {
    inject,
    TestBed
} from '@angular/core/testing';

import { ImageModelService } from './image-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('ImageModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ImageModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([ImageModelService], (service: ImageModelService) => {
        expect(service).toBeTruthy();
    }));
});
