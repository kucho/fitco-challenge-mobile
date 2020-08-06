import { Component, OnInit, Input } from "@angular/core";
import { Groupbuy } from "../services/data.service";

@Component({
  selector: "app-groupbuy",
  templateUrl: "./groupbuy.component.html",
  styleUrls: ["./groupbuy.component.scss"],
})
export class GroupbuyComponent implements OnInit {
  @Input() groupbuy: Groupbuy;

  constructor() {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === "ios";
  }
}
