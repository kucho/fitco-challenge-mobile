import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { GroupbuyRoutingModule } from "./groupbuy-routing.module";
import { GroupbuyFormComponent } from "./groupbuy-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    GroupbuyRoutingModule,
  ],
  declarations: [GroupbuyFormComponent],
  exports: [GroupbuyFormComponent],
})
export class GroupbuyFormComponentModule {}
