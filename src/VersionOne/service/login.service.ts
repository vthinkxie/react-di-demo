import { AuthService } from "./auth.service";

export class LoginService {
  private authService = new AuthService();
  login(): void {
    alert(`Login ${this.authService.authenticated ? "Success" : "Failed"}`);
  }
}
