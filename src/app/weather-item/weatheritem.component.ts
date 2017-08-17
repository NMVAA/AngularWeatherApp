import { Component } from "@angular/core";
import { Witem } from "./WItem";

@Component({
    moduleId: module.id,
    selector: "weatheritem",
    templateUrl:"weatheritem.component.html",
    styleUrls: ["weatheritem.component.css"]
})
export class WeatherItem {
    Item: Witem = {
        cityName: "London",
        temp: 3
    }
}