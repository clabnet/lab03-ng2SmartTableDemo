import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SmartDataTableComponent } from './components/smart-data-table/smart-data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SmartDataTableComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
