import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './containers/notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
