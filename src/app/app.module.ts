import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, UrlSerializer } from '@angular/router';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { provideHttpClient } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSelectionComponent,
    MovieComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'movies', component: MovieSelectionComponent },
      { path: 'movies/:movieID', component: MovieComponent },
      { path: 'contact', component: ContactComponent}
    ], {useHash: true})
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
