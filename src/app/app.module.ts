import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WeatherItem } from "./weather-item/weatheritem.component";
import { CitySearchComponent } from "./city-search/city-search.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    CitySearchComponent,
    AppComponent,
    WeatherItem,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
