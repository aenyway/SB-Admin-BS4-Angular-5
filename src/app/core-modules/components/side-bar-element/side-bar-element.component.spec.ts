import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { SideBarElementComponent } from '../';

describe('SideBarElementComponent', () => {
    let component: SideBarElementComponent;
    let fixture: ComponentFixture<SideBarElementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideBarElementComponent],
            imports: [
                RouterTestingModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideBarElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
