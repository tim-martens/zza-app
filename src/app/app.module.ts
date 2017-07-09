import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BreezeBridgeAngularModule  } from 'breeze-bridge-angular';
import { NamingConvention } from 'breeze-client';

import { AppComponent } from './app.component';
import { CustomersListComponent } from '../app/customers/customers-list.component';

import { ZzaRepositoryService } from '../app/shared/zzarepository.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    BreezeBridgeAngularModule
  ],
  providers: [ZzaRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    NamingConvention.camelCase.setAsDefault();
  }
}
