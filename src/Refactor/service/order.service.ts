import { Injectable } from "injection-js";
import { DialogService } from "./dialog.service";

@Injectable()
export class OrderService {
  constructor(private dialogService: DialogService) {}

  confirmOrder(message: string): void {
    this.dialogService.confirm(message);
  }
}
