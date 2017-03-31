import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs';

@Injectable()
export class HotelService{

    private _url: string = "../src/app/apidata/test.json";
       private _urll: string = "../src/app/apidata/hotels.json";
       private hotelsUrl: string = "http://hotelws20170329124147.azurewebsites.net/api/hotels";

       private testUrl: string = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http : Http){}

    getHotels(){
            return this._http.get(this.hotelsUrl)
                .map((LocalVar: Response) => LocalVar.json());

        /*
        return [
      {"id": 1, "name": "Rudi"},
        {"id": 2, "name": "samla"},
          {"id": 3, "name": "jenny"},
        ]
        */
    }

}