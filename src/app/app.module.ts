import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Component

import { FootersComponent } from './components/footers/footers.component';
import { HeadersComponent } from './components/headers/headers.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClasseComponent } from './pages/classe/classe.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule} from 'primeng/inputtext'
import { ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

// service
import { ConfirmationService, MessageService } from 'primeng/api';

import { AuthInterceptorProviders } from './_helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FootersComponent,
    HeadersComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ClasseComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgbDropdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CarouselModule
  ],
  
  providers: [AuthInterceptorProviders, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
