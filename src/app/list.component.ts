import { Component, OnInit } from '@angular/core';
import { HotelService} from "./hotel.service"

@Component({
  selector: 'list',
  template: `<h2>List of something</h2>
            <ul *ngFor="let item of hotelList">
                <li>
                {{item.Name}}
                </li>
            </ul>
  `


})
export class ListComponent implements OnInit{
    
  testlist = [];
  hotelList = [];

  constructor(private _list: HotelService){}
  ngOnInit(){
        this._list.getHotels()
        .subscribe(
        resTestData => this.hotelList = resTestData,
        error => alert(Error),
        () => console.log("Success")
        
        
        );


    /* this.testlist = this._list.getHotels();*/
  }

}
