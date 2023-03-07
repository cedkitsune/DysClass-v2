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
import { CGUComponent } from './pages/cgu/cgu.component';
import { MentionlegalesComponent } from './pages/mentionlegales/mentionlegales.component';
import { RgpdComponent } from './pages/rgpd/rgpd.component';
import { ExercissesComponent } from './pages/exercisses/exercisses.component';
import { Error404Component } from './pages/error404/error404.component';
import { CompteComponent } from './pages/compte/compte.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { ListedesenseignantsComponent } from './pages/admindashboard/listedesenseignants/listedesenseignants.component';
import { ExerciceformComponent } from './pages/exercisses/exerciceform/exerciceform.component';
import { ExercicelistComponent } from './pages/exercisses/exercicelist/exercicelist.component';
import { MatiereComponent } from './pages/admindashboard/matiere/matiere.component';

// module
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
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
import { MatiereformComponent } from './pages/admindashboard/matiere/matiereform/matiereform.component';





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
    CGUComponent,
    MentionlegalesComponent,
    RgpdComponent,
    ExercissesComponent,
    Error404Component,
    CompteComponent,
    AdmindashboardComponent,
    ListedesenseignantsComponent,
    ExerciceformComponent,
    ExercicelistComponent,
    MatiereComponent,
    MatiereformComponent,

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
    CarouselModule,
  ],
  
  providers: [AuthInterceptorProviders, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
