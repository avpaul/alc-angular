import { AuthService } from "./auth.service";

describe("authService", () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it("should have no user data to start", () => {
    expect(service.user).toBeUndefined();
  });

  it("should add user data on log in", () => {
    service.logInUser();

    expect(service.user).toEqual({
      username: "paul",
      email: "paul@outcode.dev"
    });
  });
});
