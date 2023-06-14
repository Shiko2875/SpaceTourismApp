import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import { SpaceService } from './space.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
