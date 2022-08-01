import { AndroidDialogService, AppleDialogService } from "./dialog.service";

export class OrderService {
  private appleDialogService = new AppleDialogService();
  private androidDialogService = new AndroidDialogService();
  private env = "android";
  confirmOrder(message: string): void {
    if (this.env === "apple") {
      this.appleDialogService.confirm(message);
    } else if (this.env === "android") {
      this.androidDialogService.confirm(message);
    }
  }
}
