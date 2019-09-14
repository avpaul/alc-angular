import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loan-payment",
  templateUrl: "./payments.component.html",
  styles: [``]
})
export class LoanPaymentComponent {
  @Input() payment: object;
}
