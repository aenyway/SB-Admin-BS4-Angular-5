import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmiComponent } from './emi.component';
import { EmiModule } from '../../emi.module';

describe('EmiComponent', () => {
    let component: EmiComponent;
    let fixture: ComponentFixture<EmiComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule(
                {
                    imports: [
                        RouterTestingModule,
                        EmiModule
                    ]
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
