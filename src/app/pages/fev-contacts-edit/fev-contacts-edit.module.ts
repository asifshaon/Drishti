import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FevContactsEditComponent } from './fev-contacts-edit.component';
import { FevContactsEditRoutingModule } from './fev-contacts-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FevContactsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FevContactsEditComponent
  ]
})
export class FevContactsEditModule { }
