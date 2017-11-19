import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { SavingsCalculatorComponent } from './components/savings-calculator/savings-calculator.component';
import { RetirementPlannerComponent } from './components/retirement-planner/retirement-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    SavingsCalculatorComponent,
    RetirementPlannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
