import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ZipcodeService } from "../api/zipcode.service";
import { UserService } from "../api/user.service";

@Component({
  selector: "app-address-capture",
  templateUrl: "./address-capture.component.html",
  styleUrls: ["./address-capture.component.css"]
})
export class AddressCaptureComponent implements OnInit {
  userForm: FormGroup;
  isNeighborhoodSelected: boolean = false;
  listOfNeigborhoods: any = [];

  constructor(
    private zipcodeService: ZipcodeService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  get getUserForm() {
    return this.userForm.controls;
  }

  getZipcode() {
    const zipCode = this.getUserForm.zipCode.value;
    this.zipcodeService.getNeighborhoodsByZipcode(zipCode).subscribe(
      (resp: any) => {
        let cleanList: any = [];
        for (let x = 0; x < resp.length; x++) {
          cleanList.push(resp[x].response);
        }
        cleanList.sort((a, b) => (a.asentamiento > b.asentamiento ? 1 : -1));
        this.listOfNeigborhoods = cleanList;
        this.isNeighborhoodSelected = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    const user = {
      firstName: this.getUserForm.firstName.value,
      lastName: this.getUserForm.lastName.value,
      zipCode: this.getUserForm.zipCode.value,
      street: this.getUserForm.street.value,
      neighborhood: this.getUserForm.neighborhood.value,
      addressNumber: this.getUserForm.addressNumber.value,
    };

    this.userService.updateUser(user);
    this.router.navigate(["/confirmar"]);
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      zipCode: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      neighborhood: new FormControl("", [Validators.required]),
      addressNumber: new FormControl("", [Validators.required])
    });
  }
}
