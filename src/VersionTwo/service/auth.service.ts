export abstract class AuthService {
  abstract authenticated: boolean;
}
export class SMSAuthService implements AuthService {
  authenticated = true;
}

export class WeiXinAuthService implements AuthService {
  authenticated = false;
}
