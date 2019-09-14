import { ComponentFixture } from "@angular/core/testing";
import { NavBarComponent } from "./navbar.component";
import { TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AuthService } from "../../common/auth.service";
import { RouterModule } from "@angular/router";

describe("Navbar Component", () => {
  let component;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      providers: [AuthService],
      schemas: [NO_ERRORS_SCHEMA]
      // imports: [RouterModule]
    });
    fixture = TestBed.createComponent(NavBarComponent);
  });

  //   const mockAuth = jasmine.createSpyObj(['isAuthenticated']).and.returnValue(true);

  it("should shallow render without error", () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll("a")[0].innerText).toContain(
      "Waret"
    );
    expect(fixture.nativeElement.querySelectorAll("a")[1].innerText).toContain(
      "Login"
    );
  });
});
