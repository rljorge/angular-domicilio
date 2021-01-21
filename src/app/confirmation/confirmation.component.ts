import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../api/user.service";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.css"]
})
export class ConfirmationComponent implements OnInit {
  user: any;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    if (!this.user.zipCode) {
      this.goBack();
    }
  }

  goBack() {
    this.router.navigate(["/"]);
  }
}
