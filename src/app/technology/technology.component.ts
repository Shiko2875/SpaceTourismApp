import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private getSpace: SpaceService) { }

  technologyData: any = [];
  data: any;

  ngOnInit(): void {
    this.getTechnology()
    this.changeActivState()
  }

  getTechnology() {
    return this.getSpace.getAllTechnology().subscribe((data) => {
      this.technologyData = Object.keys(data).map(f =>{
        return {...data[f], uuid: f}
      })
      console.log(this.technologyData, "Getting All Technology Data")
    })
  }

  changeActivState() {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(element => {
      element.addEventListener('click', () => {
        document.querySelector('.activ')?.classList.remove('activ');
        element.classList.add('activ');
      });
    });
  }
}
