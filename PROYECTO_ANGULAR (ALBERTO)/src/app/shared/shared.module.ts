import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ResaltarNotifsDirective } from './directives/resaltar-notifs.directive';



@NgModule({
  declarations: [NotificationsComponent, ResaltarNotifsDirective],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationsComponent
  ]
})
export class SharedModule { }
