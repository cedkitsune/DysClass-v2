import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "../app/pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClasseComponent } from './pages/classe/classe.component';
import { CGUComponent } from './pages/cgu/cgu.component';
import { MentionlegalesComponent } from './pages/mentionlegales/mentionlegales.component';
import { RgpdComponent } from './pages/rgpd/rgpd.component';
import { ExercissesComponent } from './pages/exercisses/exercisses.component';
import { Error404Component } from './pages/error404/error404.component';
import { CompteComponent } from './pages/compte/compte.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { MatiereComponent } from './pages/admindashboard/matiere/matiere.component';
import { ListedesenseignantsComponent } from './pages/admindashboard/listedesenseignants/listedesenseignants.component';
import { ExerciceformComponent } from './pages/exercisses/exerciceform/exerciceform.component';
import { ExercicelistComponent } from './pages/exercisses/exercicelist/exercicelist.component';


const routes: Routes = [
{ path: "",component:HomeComponent},
{ path: "login", component:LoginComponent },
{ path: "register",component:RegisterComponent},
{ path: "contact",component:ContactComponent},
{ path: "classe",component:ClasseComponent},
{ path: "cgu", component:CGUComponent},
{ path: "mention",component:MentionlegalesComponent},
{ path: "rgpd", component:RgpdComponent},
{ path: "exercisses", component:ExercissesComponent},
{ path: "compte",component:CompteComponent},
{ path: "admin", component:AdmindashboardComponent},
{ path: "matiere", component:MatiereComponent},
{ path: "enseignants", component: ListedesenseignantsComponent},
{ path: "exercicecrea", component:ExerciceformComponent},
{ path: "exerciceliste", component:ExercicelistComponent},
{ path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
