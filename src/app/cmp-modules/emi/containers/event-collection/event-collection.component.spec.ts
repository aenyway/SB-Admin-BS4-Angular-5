import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { EventCollectionComponent } from './event-collection.component';
import { EventModelService } from '../../../dataStore/models/services';
import { DatastoreModule } from '../../../dataStore/datastore.module';

describe('EventCollectionComponent', () => {
    let component: EventCollectionComponent;
    let fixture: ComponentFixture<EventCollectionComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule(
                {
                    declarations: [EventCollectionComponent],
                    providers: [EventModelService],
                    imports: [DatastoreModule],
                }
            )
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventCollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
