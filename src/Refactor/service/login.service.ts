import { AuthService } from "./auth.service";
import { Injectable } from "injection-js";

@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {}

  login(): void {
    alert(`Login ${this.authService.authenticated ? "Success" : "Failed"}`);
  }
}
