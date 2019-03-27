import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GeralService } from './geral.service';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel';
import { CarouselVideosComponent, SafePipe } from './carousel-videos';
import { AnaisComponent } from './anais/anais.component';
import { AppRoutingModule } from "app/app.routing.module";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent, CarouselComponent,
    CarouselVideosComponent, SafePipe, AnaisComponent, MainComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    ReactiveFormsModule, AppRoutingModule
  ],
  providers: [GeralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
