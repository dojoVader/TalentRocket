import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlickerSearchComponent } from './components/flicker-search/flicker-search.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlickerTagsComponent } from './components/flicker-tags/flicker-tags.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FlickerImageComponent } from './components/flicker-image/flicker-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FlickerSearchComponent,
    FlickerTagsComponent,
    HomeComponent,
    GalleryComponent,
    FlickerImageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
