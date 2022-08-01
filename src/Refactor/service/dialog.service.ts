import { Injectable } from "injection-js";

@Injectable()
export abstract class DialogService {
  abstract confirm(message: string): void;
}

@Injectable()
export class AppleDialogService implements DialogService {
  confirm(message: string): void {
    alert(`Apple Design Spec Message: ${message}`);
  }
}

@Injectable()
export class AndroidDialogService implements DialogService {
  confirm(message: string): void {
    alert(`Android Design Spec Message: ${message}`);
  }
}
