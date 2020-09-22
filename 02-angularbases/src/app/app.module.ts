import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';

// Importacion de servicio http

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Se importa el enrutador del app
    PagesModule,
    HttpClientModule // Se importa el cliente http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
