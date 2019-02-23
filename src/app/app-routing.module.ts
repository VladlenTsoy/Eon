import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {StoreComponent} from './store/store.component';
import {DisciplinesComponent} from './disciplines/disciplines.component';
import {MnemonicsComponent} from './disciplines/mnemonics/mnemonics.component';
import {RecordComponent} from './record/record.component';
import {MentalArithmeticComponent} from './disciplines/mental-arithmetic/mental-arithmetic.component';
import {EnglishMnemonicsComponent} from './disciplines/english-mnemonics/english-mnemonics.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'disciplines', component: DisciplinesComponent},
  {path: 'disciplines/mental-arithmetic', component: MentalArithmeticComponent},
  {path: 'disciplines/mnemonics', component: MnemonicsComponent},
  {path: 'disciplines/english-mnemonics', component: EnglishMnemonicsComponent},
  {path: 'store', component: StoreComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'record/discipline/:discipline/type/:type', component: RecordComponent},
  {path: 'record', component: RecordComponent},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
