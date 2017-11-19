import { Savings } from './../../models/savings';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.css']
})
export class SavingsCalculatorComponent implements OnInit {
  savingsForm: FormGroup;
  savingsEstimator: FormGroup;
  timeEstimator: FormGroup;

  activePill: string = "savingsGoal";
  saving: Savings
  constructor() { }

  ngOnInit() {
    this.savingsForm = new FormGroup({
      savingsGoal: new FormControl(null, [Validators.required]),
      currentSavings: new FormControl(null, [Validators.required]),
      annualInterest: new FormControl(null, [Validators.required]),
      compounding: new FormControl(null, [Validators.required]),
      numberOfYears: new FormControl(null, [Validators.required]),
    })

    this.savingsEstimator = new FormGroup({
      currentSavings: new FormControl(null, [Validators.required]),
      monthlyInvestment: new FormControl(null, [Validators.required]),
      annualInterest: new FormControl(null, [Validators.required]),
      compounding: new FormControl(null, [Validators.required]),
      numberOfYears: new FormControl(null, [Validators.required]),
    })

    this.timeEstimator = new FormGroup({
      currentSavings: new FormControl(null, [Validators.required]),
      savingsGoal: new FormControl(null, [Validators.required]),
      monthlyInvestment: new FormControl(null, [Validators.required]),
      annualInterest: new FormControl(null, [Validators.required]),
      compounding: new FormControl(null, [Validators.required]),
    })
  }

  submitForm(form: FormGroup) {
    this.saving = form.value
    console.log(this.saving)
  }
}
