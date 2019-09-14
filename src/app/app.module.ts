import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CurrencyCommaPipe } from "./common/currencyComma.pipe";
import { AuthService } from "./common/auth.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/navbar/navbar.component";
import { LoanCalculatorComponent } from "./components/loanCalculator/calculator.component";
import { LoanPaymentComponent } from "./components/payments/payments.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoanCalculatorComponent,
    LoanPaymentComponent,
    LoginComponent,
    CurrencyCommaPipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
