import { AuthService } from "./auth.service";

export class LoginService {
  constructor(private authServiceInterface: AuthService) {}
  login(): void {
    alert(
      `Login from ${this.authServiceInterface.name} ${
        this.authServiceInterface.authenticated ? "Success" : "Failed"
      }`
    );
  }
}
