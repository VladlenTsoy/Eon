import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, ru_RU} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {HomeComponent} from './home/home.component';
import {StoreComponent} from './store/store.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DisciplinesComponent} from './disciplines/disciplines.component';
import {MnemonicsComponent} from './disciplines/mnemonics/mnemonics.component';
import {NavigationComponent} from './layouts/header/navigation/navigation.component';
import {RecordComponent} from './record/record.component';
import { MentalArithmeticComponent } from './disciplines/mental-arithmetic/mental-arithmetic.component';
import { EnglishMnemonicsComponent } from './disciplines/english-mnemonics/english-mnemonics.component';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    StoreComponent,
    ContactsComponent,
    DisciplinesComponent,
    MnemonicsComponent,
    NavigationComponent,
    RecordComponent,
    MentalArithmeticComponent,
    EnglishMnemonicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: NZ_I18N, useValue: ru_RU}],
  bootstrap: [AppComponent],
  entryComponents: [SidebarComponent]
})
export class AppModule {
}
