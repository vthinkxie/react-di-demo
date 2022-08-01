export class AppleDialogService {
  confirm(message: string): void {
    alert(`Apple Design Spec Message: ${message}`);
  }
}

export class AndroidDialogService {
  confirm(message: string): void {
    alert(`Android Design Spec Message: ${message}`);
  }
}
