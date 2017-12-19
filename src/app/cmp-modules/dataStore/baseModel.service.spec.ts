import {
    inject,
    TestBed
} from '@angular/core/testing';

import { BaseModelService } from './baseModel.service';
import { JsonApiModel } from 'angular-jsonapi-client';
import { DatastoreModule } from './datastore.module';

describe('BaseModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseModelService
            ],
            imports: [
                DatastoreModule
            ],
        });
    });

    it('should be created', inject([BaseModelService], (service: BaseModelService<JsonApiModel>) => {
        expect(service).toBeTruthy();
    }));
});
