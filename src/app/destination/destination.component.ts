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
    this.displayData()
  }

  getDesinations() {
    return this.getSpace.getAllDesinations().subscribe((data) => {
      this.destinationData = Object.keys(data).map(f =>{
        return {...data[f], uuid: f}
      })
      console.log(this.destinationData, "Getting All Destinations Data")
    })
  }

  displayData() {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(element => {
      element.addEventListener('click', () => {
        document.querySelector('.activ')?.classList.remove('activ');
        element.classList.add('activ');
      });
    });
  }
  

}
