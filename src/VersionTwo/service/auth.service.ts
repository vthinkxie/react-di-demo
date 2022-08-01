export abstract class AuthService {
  abstract authenticated: boolean;
  abstract name: string;
}
export class SMSAuthService implements AuthService {
  name = "SMS";
  authenticated = true;
}

export class WeiXinAuthService implements AuthService {
  name = "WeiXin";
  authenticated = false;
}
