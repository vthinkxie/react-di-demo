import { Injectable } from "injection-js";

@Injectable()
export abstract class AuthService {
  abstract name: string;
  abstract authenticated: boolean;
}

@Injectable()
export class SMSAuthService implements AuthService {
  name = "SMS";
  authenticated = true;
}

@Injectable()
export class WeiXinAuthService implements AuthService {
  name = "WeiXin";
  authenticated = false;
}
