import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor(private getSpace: SpaceService) { }

  crewData: any = [];
  data: any;

  ngOnInit(): void {
    this.getCrew()
  }

  getCrew() {
    return this.getSpace.getAllCrew().subscribe((data) => {
      this.crewData = Object.keys(data).map(f =>{
        return {...data[f], uuid: f}
      })
      console.log(this.crewData, "Getting All Crew Data")
    })
  }
}
