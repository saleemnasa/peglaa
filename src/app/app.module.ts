import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

import { Globals } from './constants/app.globals';
import { Globals2Service } from './constants/app.globals2.service';
import { ShopsListComponent } from './components/shops-list/shops-list.component';
import { ApiCallsService } from './services/api-calls.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { OwnerLoginSignupComponent } from './components/owner-login-signup/owner-login-signup.component';
import { CustomerLoginSignupComponent } from './components/customer-login-signup/customer-login-signup.component';
import { OwnerHomeComponent } from './components/owner-home/owner-home.component';
import { AddShopComponent } from './components/add-shop/add-shop.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shops_list', component: ShopsListComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'owner_login_signup', component: OwnerLoginSignupComponent },
  { path: 'customer_login_signup', component: CustomerLoginSignupComponent },
  {
    path: 'owner_home', component: OwnerHomeComponent,
    children: [
      {
        path: '',
        component: AddShopComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OwnerLoginSignupComponent,
    CustomerLoginSignupComponent,
    OwnerHomeComponent,
    AddShopComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule
  ],
  providers: [Globals, Globals2Service, ApiCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
