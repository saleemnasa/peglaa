import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

import { Globals } from './constants/app.globals';
import { ShopsListComponent } from './components/shops-list/shops-list.component';
import { ApiCallsService } from './services/api-calls.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shops_list', component: ShopsListComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule
  ],
  providers: [Globals, ApiCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
