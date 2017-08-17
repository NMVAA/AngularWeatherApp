import { Component } from "@angular/core";
import { WeatherItem } from "./weather-item/weatheritem.component";
import { Witem } from "./weather-item/WItem";
import { CitySearchComponent } from "./city-search/city-search.component";

@Component({
  selector: "my-app",
  template: `
  <div id="header">
    <h1>Weater App</h1>
  </div>
  <citysearch></citysearch>
  <weatheritem></weatheritem>
  `
})

export class AppComponent {
   WEATHERITEMS: Witem[];
   
}
