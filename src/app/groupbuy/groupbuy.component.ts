import { Component, OnInit, Input } from "@angular/core";
import { Groupbuy, DataService } from "../services/data.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-groupbuy",
  templateUrl: "./groupbuy.component.html",
  styleUrls: ["./groupbuy.component.scss"],
})
export class GroupbuyComponent implements OnInit {
  @Input() groupbuy: Groupbuy;

  constructor(
    private data: DataService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000,
    });
    toast.present();
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === "ios";
  }

  deleteGB(id: string) {
    this.data.deleteGroupbuy(id);
    this.presentToast("Deleted!", "success");
  }
}
