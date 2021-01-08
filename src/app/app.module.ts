import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LetterCountComponent } from './letter-count/letter-count.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SalesTaxComponent } from './sales-tax/sales-tax.component';
import { TermsComponent } from './terms/terms.component';
import { PasswordComponent } from './password/password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoriesComponent } from './stories/stories.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseComponent } from './exercise/exercise.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

const renderer = new MarkedRenderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);
  return html.replace(/^<a /, '<a role="link" tabindex="0" target="_blank" rel="nofollow noopener noreferrer" ');
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          renderer,
          gfm: true,
          // breaks: false,
          // pedantic: false,
          // smartLists: true,
          // smartypants: false,
        },
      },
    }),
  ],
  declarations: [
    AppComponent,
    LetterCountComponent,
    InvoiceComponent,
    TemperatureComponent,
    SalesTaxComponent,
    TermsComponent,
    PasswordComponent,
    CheckoutComponent,
    StoriesComponent,
    EmailComponent,
    HomeComponent,
    ExerciseComponent,
    CheatSheetComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
