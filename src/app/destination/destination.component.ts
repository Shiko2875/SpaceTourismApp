import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor(private getSpace: SpaceService) { }

  destinationData: any = [];
  data: any;

  ngOnInit(): void {
    this.getDesinations()
  }

  getDesinations() {
    return this.getSpace.getAllDesinations().subscribe((data) => {
      this.destinationData = Object.keys(data).map(f =>{
        return {...data[f], uuid: f}
      })
      console.log(this.destinationData, "Getting All Destinations Data")
    })
  }
}
