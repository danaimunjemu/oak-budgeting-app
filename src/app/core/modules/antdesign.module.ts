import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCardModule } from 'ng-zorro-antd/card';


const modules = [
  NzButtonModule,
  NzUploadModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzIconModule,
  NzPageHeaderModule,
  NzFormModule,
  NzNotificationModule,
  NzMessageModule,
  NzTimePickerModule,
  NzStatisticModule,
  NzToolTipModule,
  NzSkeletonModule,
  NzDropDownModule,
  NzSelectModule,
  NzEmptyModule,
  NzModalModule,
  NzTabsModule,
  NzResultModule,
  NzTableModule,
  NzDatePickerModule,
  NzAvatarModule,
  NzAlertModule,
  NzInputModule,
  NzSpinModule,
  NzStepsModule,
  NzCollapseModule,
  NzDrawerModule,
  NzCheckboxModule,
  NzSwitchModule,
  NzCardModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class AntDesignModules {}
