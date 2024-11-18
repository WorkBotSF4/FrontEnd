import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ClasesService{
    private urlClases='https://rickandmortyapi.com/api/character/1,183';
    constructor (private http: HttpClient){}
    public getData():Observable <any>{
        return this.http.get<any>(this.urlClases);
    }
}