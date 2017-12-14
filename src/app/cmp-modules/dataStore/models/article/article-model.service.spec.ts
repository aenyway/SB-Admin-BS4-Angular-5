import {
    inject,
    TestBed
} from '@angular/core/testing';

import { ArticleModelService } from './article-model.service';
import { DatastoreModule } from '../../datastore.module';

describe('ArticleModelService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArticleModelService],
            imports: [DatastoreModule],
        });
    });

    it('should be created', inject([ArticleModelService], (service: ArticleModelService) => {
        expect(service).toBeTruthy();
    }));
});
