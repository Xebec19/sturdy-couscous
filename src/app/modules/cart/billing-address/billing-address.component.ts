import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const billingAddressForm = new FormGroup({
      firstName : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      lastName : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      email : new FormControl("",[Validators.email]),
      address : new FormControl("",[Validators.required]),
      country : new FormControl("India")

    })
  }

}
