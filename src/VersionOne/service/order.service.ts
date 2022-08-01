import { AppleDialogService } from "./dialog.service";

export class OrderService {
  private dialogService = new AppleDialogService();
  confirmOrder(message: string): void {
    this.dialogService.confirm(message);
  }
}
