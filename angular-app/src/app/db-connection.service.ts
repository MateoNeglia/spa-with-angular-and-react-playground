import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class dbConnectionService {
    constructor(private http: HttpClient){}

    getDBData():any {
        return this.http.get('http://localhost:2000/users');
    }

    updateDBData(updatedData: any) {
        return this.http.put('http://localhost:2000/checkoutProducs',updatedData);
    }
}



