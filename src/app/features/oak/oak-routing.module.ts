import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MainComponent} from "./components/main/main.component";
import {BudgetComponent} from "./pages/budget/budget.component";
import {GoalsComponent} from "./pages/goals/goals.component";
import {AccountsComponent} from "./pages/accounts/accounts.component";
import {TransactionsComponent} from "./pages/transactions/transactions.component";
import {ReportsComponent} from "./pages/reports/reports.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {BeneficiariesComponent} from "./pages/beneficiaries/beneficiaries.component";
import {CategoriesComponent} from "./pages/categories/categories.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent ,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'budget', component: BudgetComponent },
      { path: 'goals', component: GoalsComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'beneficiaries', component: BeneficiariesComponent },
      { path: 'categories', component: CategoriesComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OakRoutingModule { }
