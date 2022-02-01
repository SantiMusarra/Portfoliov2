import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsScreenComponent } from './components/projects-screen/projects-screen.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    ProjectsScreenComponent,
    ProjectComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
