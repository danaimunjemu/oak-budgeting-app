import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NotificationService} from "../../../../core/services/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {
  }
  login(){
    this.notificationService.createNotification({
      type: 'success',
      title: 'Login Successful',
      content: 'You can start growing your oaks!'
    });
    setTimeout(()=> this.router.navigateByUrl('/oak'), 1000);
  }

}
