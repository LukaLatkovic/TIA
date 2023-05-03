import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AtmListComponent } from './atm-list/atm-list.component';
import { HomeComponent } from './home/home.component';
import { AtmNewComponent } from './atm-new/atm-new.component';
import { AtmUserComponent } from './atm-user/atm-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'atm/atm-list', component: AtmListComponent},
  {path: 'atm/atm-new', component: AtmNewComponent},
  {path: 'atm/atm-user', component: AtmUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
