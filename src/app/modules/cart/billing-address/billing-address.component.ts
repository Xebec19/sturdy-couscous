import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {
  isSubmitted = false;
  country = 'India';
  state = 'Delhi';
  billingAddressForm: FormGroup;
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.billingAddressForm = new FormGroup({
      firstName : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      lastName : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      email : new FormControl("",[Validators.email,Validators.required]),
      address : new FormControl("",[Validators.required]),
      country : new FormControl(this.country,[Validators.required]),
      state :  new FormControl(this.state,[Validators.required]),
      postalCode : new FormControl("",[Validators.required,Validators.pattern("[0-9]*")])
    })
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.billingAddressForm.invalid){
      return;
    }
    console.log("--billing address : ",this.billingAddressForm);
    this.checkoutService.setShippingDetails(JSON.stringify(this.billingAddressForm.value),this.billingAddressForm.controls.email.value);
  }

}
