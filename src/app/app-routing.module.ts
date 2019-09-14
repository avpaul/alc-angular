import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoanCalculatorComponent } from "./components/loanCalculator/calculator.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "", component: LoanCalculatorComponent },
  { path: "login", component: LoginComponent },
  { path: "*", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
