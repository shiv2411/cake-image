import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BirthdaycakesComponent } from './birthdaycakes/birthdaycakes.component';
import { SportscakesComponent } from './sportscakes/sportscakes.component';
import { OurcakesComponent } from './ourcakes/ourcakes.component';
import { SpecialcakesComponent } from './specialcakes/specialcakes.component';
import { GymcakesComponent } from './sportscakes/gymcakes/gymcakes.component';
import { FootballcakesComponent } from './sportscakes/footballcakes/footballcakes.component';
import { HttpClientModule } from '@angular/common/http';
import { AllcakesComponent } from './specialcakes/all_sports/all_sports.component';
import { BabyshowerComponent } from './ourcakes/baby_shower/baby_shower.component';
import { SuperheroescakesComponent } from './birthdaycakes/superheroes/super.component';
import { CakeformComponent } from './cakeform/cakeform.component';


// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
// import {AngularFireAuthModule} from 'angularfire2/auth';
// import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { NewsregComponent } from './newsregister/newsreg.component';
import { CakescategoryregComponent } from './cakecategory/cakecategoryreg.component';
import { OffersregComponent } from './offersreg/offersreg.component';
import { CakesregComponent } from './cakereg/cakereg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewsComponent,
    OffersComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    BirthdaycakesComponent,
    SportscakesComponent,
    OurcakesComponent,
    AllcakesComponent,
    SpecialcakesComponent,
    CakeformComponent,
    GymcakesComponent,
    FootballcakesComponent,
    BabyshowerComponent,
    SuperheroescakesComponent,
    OffersregComponent,
    NewsregComponent,
    CakescategoryregComponent,
    CakesregComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // AngularFireModule.initializeApp(environment.firebase),
    //   AngularFireAuthModule,
    //   AngularFirestoreModule,
    //   AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
