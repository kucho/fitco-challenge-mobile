import { Component, OnInit } from "@angular/core";
import { Groupbuy } from "../services/data.service";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { DataService } from "../services/data.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-groupbuy-form",
  templateUrl: "./groupbuy-form.component.html",
  styleUrls: ["./groupbuy-form.component.scss"],
})
export class GroupbuyFormComponent implements OnInit {
  constructor(
    public toastController: ToastController,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {}

  async presentToast(message: string, valid: boolean) {
    const toast = await this.toastController.create({
      message,
      color: valid ? "dark" : "danger",
      duration: 2000,
    });
    toast.present();
  }

  onSubmit(form: NgForm) {
    const groupbuy = (<unknown>form.value) as Groupbuy;
    if (groupbuy.price < 0) {
      this.presentToast("The price must be a positive number", false);
      return;
    }

    if (!groupbuy.name || !groupbuy.description || !groupbuy.album) {
      this.presentToast("The form is not valid", false);
      return;
    }
    groupbuy.createdAt = new Date();
    this.data.addGroupbuy(groupbuy);
    this.presentToast("Great! You'll be redirected soon", true);
    setTimeout(() => {
      this.router.navigate(["/home"]);
    }, 2000);
  }
}
