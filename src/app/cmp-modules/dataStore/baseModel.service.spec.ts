import {
    inject,
    TestBed
} from '@angular/core/testing';

import { BaseModelService } from './baseModel.service';
import { JsonApiModel } from 'angular2-jsonapi';
import { DatastoreModule } from './datastore.module';

export interface Type {
}

describe('BaseModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BaseModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([BaseModelService], (service: BaseModelService<JsonApiModel, Type>) => {
        expect(service).toBeTruthy();
    }));
});
