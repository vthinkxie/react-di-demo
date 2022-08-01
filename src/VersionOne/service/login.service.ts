import { AuthService } from "./auth.service";

export class LoginService {
  private authService = new AuthService();
  login(): void {
    alert(
      `Login from ${this.authService.name} ${
        this.authService.authenticated ? "Success" : "Failed"
      }`
    );
  }
}
