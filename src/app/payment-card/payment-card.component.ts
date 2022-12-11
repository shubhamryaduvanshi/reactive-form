import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent implements OnInit {

  constructor() { }


  get cardNumber() { return this.paymentCardForm.get('cardNumber'); }
  get cardHolderName() { return this.paymentCardForm.get('cardHolderName'); }
  get cvv() { return this.paymentCardForm.get('cvv'); }


  paymentCardForm = new FormGroup({
    cardHolderName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16),
    Validators.pattern('^[0-9]*$')]
    ),
    cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3),
    Validators.pattern('^[0-9]*$')]),
    amount: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
  });



  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.paymentCardForm.valid) {
      this.paymentCardForm.markAllAsTouched();
      return;
    }
    console.log(this.paymentCardForm.value);
  }


}
