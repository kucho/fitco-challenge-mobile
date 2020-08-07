import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GroupbuyFormComponent } from "./groupbuy-form.component";

const routes: Routes = [
  {
    path: "",
    component: GroupbuyFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupbuyRoutingModule {}
