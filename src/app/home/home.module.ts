import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { HomePage } from "./home.page";
import { HomePageRoutingModule } from "./home-routing.module";
import { GroupbuyComponentModule } from "../groupbuy/groupbuy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupbuyComponentModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
