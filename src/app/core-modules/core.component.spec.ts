import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { CoreComponent } from './core.component';
import {
    HeaderComponent,
    SideBarComponent,
    SideBarElementComponent
} from './components';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('CoreComponent', () => {
    let component: CoreComponent;
    let fixture: ComponentFixture<CoreComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    CoreComponent,
                    HeaderComponent,
                    SideBarComponent,
                    SideBarElementComponent
                ],
                imports: [
                    RouterTestingModule,
                    TranslateModule.forRoot(),
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
