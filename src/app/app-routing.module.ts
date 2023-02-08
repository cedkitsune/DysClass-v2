import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "../app/pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClasseComponent } from './pages/classe/classe.component';

const routes: Routes = [
{ path: "",component:HomeComponent},
{ path: "login", component:LoginComponent },
{ path: "register",component:RegisterComponent},
{ path: "contact",component:ContactComponent},
{ path: "classe",component:ClasseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
