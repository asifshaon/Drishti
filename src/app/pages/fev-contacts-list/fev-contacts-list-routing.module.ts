import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FevContactsListComponent } from './fev-contacts-list.component';

const routes: Routes = [
  {
    path: '',
    component: FevContactsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FevContactsListRoutingModule { }
