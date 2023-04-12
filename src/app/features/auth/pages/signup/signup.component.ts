import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NotificationService} from "../../../../core/services/notification.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {
  }
  signup(){
    this.notificationService.createNotification({
      type: 'success',
      title: 'Sign Successful',
      content: 'You can start planting your oaknuts!'
    });
    setTimeout(()=> this.router.navigateByUrl('/auth/login'), 1000);
  }

}
