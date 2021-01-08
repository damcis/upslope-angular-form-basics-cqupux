import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from "./checkout/checkout.component";
import { EmailComponent } from "./email/email.component";
import { HomeComponent } from "./home/home.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { LetterCountComponent } from "./letter-count/letter-count.component";
import { PasswordComponent } from "./password/password.component";
import { SalesTaxComponent } from "./sales-tax/sales-tax.component";
import { StoriesComponent } from "./stories/stories.component";
import { TemperatureComponent } from "./temperature/temperature.component";
import { TermsComponent } from "./terms/terms.component";
import { ExerciseComponent } from "./exercise/exercise.component";
import { CheatSheetComponent } from "./cheat-sheet/cheat-sheet.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cheat-sheet', component: CheatSheetComponent},
  {
    path: '',
    component: ExerciseComponent,
    children: [
      {path: 'checkout', component: CheckoutComponent},
      {path: 'email', component: EmailComponent},
      {path: 'invoice', component: InvoiceComponent},
      {path: 'letter-count', component: LetterCountComponent},
      {path: 'password', component: PasswordComponent},
      {path: 'sales-tax', component: SalesTaxComponent},
      {path: 'stories', component: StoriesComponent},
      {path: 'temperature', component: TemperatureComponent},
      {path: 'terms', component: TermsComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
