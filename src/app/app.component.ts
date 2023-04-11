import {Component, OnInit} from '@angular/core';
import DataSet from "@antv/data-set";
import { Chart } from '@antv/g2';
import {ModeToggleService} from "./core/modules/mode/mode-toggle.service";
import {Mode} from "./core/modules/mode/mode-toggle.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentMode: Mode = Mode.LIGHT;

  constructor(
    private modeToggleService: ModeToggleService
  ) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

  toggle() {
    this.modeToggleService.toggleMode();
    console.log(this.currentMode)
  }

  ngOnInit(): void {
    console.log(this.currentMode)
  }
}
