import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: any = {};

  constructor() {}

  getUser() {
    return this.user;
  }

  updateUser(user: any) {
    this.user = user;
  }

  resetUser() {
    this.user = {};
  }
}
