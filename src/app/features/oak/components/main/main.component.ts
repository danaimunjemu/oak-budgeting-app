import { Component } from '@angular/core';
import { ModeToggleService } from "../../../../core/modules/mode/mode-toggle.service";
import { Mode } from "../../../../core/modules/mode/mode-toggle.model"
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isCollapsed = false;
  currentMode: Mode = Mode.LIGHT;

  mode?: boolean = this.checkMode();

  constructor(
    private modeToggleService: ModeToggleService,
    private router: Router
    ) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

  toggle() {
    console.log(this.currentMode)
    this.modeToggleService.toggleMode();
  }

  checkMode(): boolean {
    return this.currentMode == "light"
  }

  logout() {
    setTimeout(()=> this.router.navigateByUrl('/'), 1000);
  }

}
