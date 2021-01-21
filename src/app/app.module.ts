import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing.module";
import { AddressCaptureComponent } from "./address-capture/address-capture.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    AppComponent,
    AddressCaptureComponent,
    ConfirmationComponent,
    ConfirmationComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
