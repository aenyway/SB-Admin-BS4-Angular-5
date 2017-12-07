import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazineRoutingModule } from './magazine-routing.module';
import { MagazineComponent } from './containers/magazine/magazine.component';

@NgModule({
  imports: [
    CommonModule,
    MagazineRoutingModule
  ],
  declarations: [MagazineComponent]
})
export class MagazineModule { }
