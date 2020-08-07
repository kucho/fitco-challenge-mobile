import { Component } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  today = new Date();
  groupbuys = [];

  constructor(private data: DataService) {
    this.getGroupbuys();
  }

  getGroupbuys() {
    this.data.getGroupbuys().subscribe((gb) => {
      this.groupbuys = gb;
    });
  }
}
