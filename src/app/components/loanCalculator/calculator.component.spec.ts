import { LoanCalculatorComponent } from "./calculator.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { LoanPaymentComponent } from "../payments/payments.component";
import { CurrencyCommaPipe } from "../../common/currencyComma.pipe";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("Loan calculator Component", () => {
  let component;
  let fixture: ComponentFixture<LoanCalculatorComponent>;
  let loan;

  beforeEach(() => {});

  it("should calculate loan payment", () => {
    component = new LoanCalculatorComponent();

    component.loan = {
      amount: 50000000,
      interest: 8,
      years: 10
    };

    component.calculatePayments();

    expect(component.loan).toEqual({
      amount: 50000000,
      interest: 8,
      years: 10,
      monthlyPayment: 333333.3333333333
    });
  });

  it("should do a shallow render without error", () => {
    TestBed.configureTestingModule({
      declarations: [
        LoanCalculatorComponent
      ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(LoanCalculatorComponent);

    fixture.componentInstance.loan = {
      amount: 50000000,
      interest: 8,
      years: 10,
      monthlyPayment: undefined
    };

    expect(fixture.componentInstance.loan.amount).toEqual(50000000);
  });
});
