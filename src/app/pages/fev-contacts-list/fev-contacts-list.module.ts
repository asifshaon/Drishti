import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FevContactsListComponent } from './fev-contacts-list.component';
import { FevContactsListRoutingModule } from './fev-contacts-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FevContactsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FevContactsListComponent
  ]
})
export class FevContactsListModule { }
