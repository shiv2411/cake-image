import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BirthdaycakesComponent } from './birthdaycakes/birthdaycakes.component';
import { SportscakesComponent } from './sportscakes/sportscakes.component';
import { OurcakesComponent } from './ourcakes/ourcakes.component';
import { SpecialcakesComponent } from './specialcakes/specialcakes.component';
import { FootballcakesComponent } from './sportscakes/footballcakes/footballcakes.component';
import { GymcakesComponent } from './sportscakes/gymcakes/gymcakes.component';
import { AllcakesComponent } from './specialcakes/all_sports/all_sports.component';
import { BabyshowerComponent } from './ourcakes/baby_shower/baby_shower.component';
import { SuperheroescakesComponent } from './birthdaycakes/superheroes/super.component';
import { CakeformComponent } from './cakeform/cakeform.component';
import { AdminComponent } from './admin/admin.component';
import { NewsregComponent } from './newsregister/newsreg.component';
import { CakescategoryregComponent } from './cakecategory/cakecategoryreg.component';
import { OffersregComponent } from './offersreg/offersreg.component';
import { CakesregComponent } from './cakereg/cakereg.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'news', component: NewsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'cakeform', component: CakeformComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/cakecatreg', component: CakescategoryregComponent},
  {path: 'admin/newsregform', component: NewsregComponent},
  {path: 'admin/offersreg', component: OffersregComponent},
  {path: 'admin/cakereg', component: CakesregComponent},
  {path: 'birthdaycakes', component: BirthdaycakesComponent},
  {path: 'birthdaycakes/superheroes', component: SuperheroescakesComponent},
  {path: 'sportscakes', component: SportscakesComponent},
  {path: 'ourcakes', component: OurcakesComponent},
  {path: 'ourcakes/baby_shower', component: BabyshowerComponent},
  {path: 'specialcakes', component: SpecialcakesComponent},
  {path: 'specialcakes/all_sports', component: AllcakesComponent},
  {path: 'sportscakes/gymcakes', component: GymcakesComponent},
  {path: 'sportscakes/footballcakes', component: FootballcakesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
