import { Component } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  groupbuys = [];

  constructor(private data: DataService) {
    this.getGroupbuys();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getGroupbuys() {
    this.data.getGroupbuys().subscribe((gb) => {
      this.groupbuys = gb;
    });
  }
}
