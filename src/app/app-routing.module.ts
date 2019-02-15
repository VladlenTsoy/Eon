import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {StoreComponent} from './store/store.component';
import {DisciplinesComponent} from './disciplines/disciplines.component';
import {MnemonicsComponent} from './disciplines/mnemonics/mnemonics.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'disciplines', component: DisciplinesComponent},
  {path: 'disciplines/mnemonics', component: MnemonicsComponent},
  {path: 'store', component: StoreComponent},
  {path: 'contacts', component: ContactsComponent},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
