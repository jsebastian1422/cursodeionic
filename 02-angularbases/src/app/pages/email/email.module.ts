import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { MailComponent } from './mail/mail.component';


@NgModule({
  declarations: [EmailComponent, MailComponent],
  imports: [
    CommonModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }
