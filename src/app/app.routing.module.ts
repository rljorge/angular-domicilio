import { Routes } from "@angular/router";
import { AddressCaptureComponent } from "./address-capture/address-capture.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";

export const AppRoutes: Routes = [
  { path: "", component: AddressCaptureComponent },
  { path: "confirmar", component: ConfirmationComponent },
  { path: "**", redirectTo: "" }
];
