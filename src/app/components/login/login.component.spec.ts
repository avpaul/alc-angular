import { LoginComponent } from "./login.component";

describe("Login Component", () => {
  let component;
  let authServiceMock;
  let routerMockService;

  beforeEach(() => {});

  it("should login the user", () => {
    authServiceMock = jasmine.createSpyObj(["logInUser"]);
    routerMockService = jasmine.createSpyObj(["navigate"]);
    component = new LoginComponent(authServiceMock, routerMockService);

    component.user = {
      email: "paul@outcode.dev",
      password: "12345678"
    };
    component.logInUser();

    expect(authServiceMock.logInUser).toHaveBeenCalledTimes(1);
    expect(authServiceMock.logInUser).toHaveBeenCalledWith({
      email: "paul@outcode.dev",
      password: "12345678"
    });

    expect(routerMockService.navigate).toHaveBeenCalledTimes(1);
    expect(routerMockService.navigate).toHaveBeenCalledWith(["/"]);
  });
});
