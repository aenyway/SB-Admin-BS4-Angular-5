import {
    inject,
    TestBed
} from '@angular/core/testing';

import { AgendaModelService } from './agenda-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('AgendaModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AgendaModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([AgendaModelService], (service: AgendaModelService) => {
        expect(service).toBeTruthy();
    }));
});
