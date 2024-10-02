import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // FooterComponent,
    // HeaderComponent,
    SigninComponent,
    SignupComponent,
    UsersComponent,
    AboutComponent,
    PageNotFoundComponent,
    ContactComponent,
    MovieCardComponent,
    TopRatedComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
