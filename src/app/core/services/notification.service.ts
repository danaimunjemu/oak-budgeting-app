import { Injectable } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";

export interface NotificationModel {
  type: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private notification: NzNotificationService,
  ) { }


  createNotification(notification: NotificationModel) {
    this.notification.create(
      notification.type,
      notification.title,
      notification.content,
      { nzPlacement: 'bottomRight', nzDuration: 10000 }
    )
  }


}
