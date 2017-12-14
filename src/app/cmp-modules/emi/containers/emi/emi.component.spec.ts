import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmiComponent } from './emi.component';

describe('EmiComponent', () => {
    let component: EmiComponent;
    let fixture: ComponentFixture<EmiComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule(
                {
                    declarations: [EmiComponent],
                    imports: [RouterTestingModule]
                }
            )
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
