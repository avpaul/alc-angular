import { Component } from "@angular/core";

interface Loan {
  amount: number;
  interest: number;
  years: number;
  monthlyPayment: number;
}

@Component({
  selector: "app-loan-calculator",
  templateUrl: "./calculator.component.html",
  styles: [``]
})
export class LoanCalculatorComponent {
  loan: Loan = {
    amount: 0,
    interest: 0,
    years: 0,
    monthlyPayment: 0
  };

  calculatePayments() {
    if (this.loan.interest && this.loan.amount) {
      this.loan.monthlyPayment =
        (this.loan.amount * (this.loan.interest / 100)) / 12;
    }
  }
}
