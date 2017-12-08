import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import {
    SideBarComponent,
    SideBarElementComponent
} from '../';

describe('SideBarComponent', () => {
    let component: SideBarComponent;
    let fixture: ComponentFixture<SideBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SideBarComponent,
                SideBarElementComponent
            ],
            imports: [
                RouterTestingModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
