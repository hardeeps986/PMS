import { Retirement } from './../../models/retirement';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-retirement-planner',
  templateUrl: './retirement-planner.component.html',
  styleUrls: ['./retirement-planner.component.css']
})
export class RetirementPlannerComponent implements OnInit {
  retirement: Retirement
  retirementForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.retirementForm = new FormGroup({
      currentAnnualIncome: new FormControl(null, [Validators.required]),
      age: new FormGroup({
        currentAge: new FormControl(null, [Validators.required]),
        retirementAge: new FormControl(null, [Validators.required])
      }),
      lifeExpectancy: new FormControl(null, [Validators.required]),
      currentSavings: new FormControl(null, [Validators.required]),
      incomeAfterRetirement: new FormControl(null, [Validators.required]),
      annualInvestmentReturn: new FormGroup({
        preRetirementReturn: new FormControl(null, [Validators.required]),
        postRetirementReturn: new FormControl(null, [Validators.required])
      })
    })
  }

  submitForm(form: FormGroup) {
    this.retirement = form.value
    console.log(this.retirement)
  }


}
