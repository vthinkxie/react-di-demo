import { Injectable } from "injection-js";

@Injectable()
export abstract class AuthService {
  abstract authenticated: boolean;
}

@Injectable()
export class SMSAuthService implements AuthService {
  authenticated = true;
}

@Injectable()
export class WeiXinAuthService implements AuthService {
  authenticated = false;
}
