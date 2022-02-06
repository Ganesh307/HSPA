import { Component } from "@angular/core";

@Component({
  selector:'app-property-card',
  //template:`<h1>Hii How r you</h1>`,
  templateUrl:'property-card.component.html',
  //styles:['h1{font-weight:normal;}']
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent{
   property:any ={
     Id: 1,
     Name : "Birla House",
     Type:"House",
     Price:2000
   }
}
