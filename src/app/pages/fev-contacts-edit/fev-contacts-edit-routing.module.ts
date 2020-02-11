import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FevContactsEditComponent } from './fev-contacts-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FevContactsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FevContactsEditRoutingModule { }
