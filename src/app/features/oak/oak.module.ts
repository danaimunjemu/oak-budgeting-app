import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OakRoutingModule } from './oak-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';

import { AntDesignModules } from "../../core/modules/antdesign.module";
import { FormsModule } from "@angular/forms";
import { BudgetComponent } from './pages/budget/budget.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BeneficiariesComponent } from './pages/beneficiaries/beneficiaries.component';
import { CategoriesComponent } from './pages/categories/categories.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    BudgetComponent,
    GoalsComponent,
    AccountsComponent,
    TransactionsComponent,
    ReportsComponent,
    SettingsComponent,
    BeneficiariesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    OakRoutingModule,
    AntDesignModules,
    FormsModule
  ]
})
export class OakModule { }
