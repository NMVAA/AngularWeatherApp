import { Component } from "@angular/core";
import { Witem } from "../weather-item/WItem";

@Component({
    moduleId: module.id,
    selector: "citysearch",
    templateUrl: "city-search.component.html",
    styleUrls: ["city-search.component.css"]
})
export class CitySearchComponent {
    create(value: string) {
    console.log(value);
  }
}