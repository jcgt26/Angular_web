import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CoronaComponent } from './components/corona/corona.component';
import { HomeComponent } from './components/home/home.component';
import { PicturesComponent } from './components/pictures/pictures.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'corona', component: CoronaComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'pictures', component: PicturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
