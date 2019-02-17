
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    constructor(private http: HttpClient){}

    getNavbar(){
        return this.http.get('assets/data/navbar.json');
    }
    getNavBar2(){
        return this.http.get('assets/data/navBar2.json');
    }
    getNavbar4(){
        return this.http.get('assets/data/navbar4.json');
    }
    getCarousel(){
        return this.http.get('assets/data/carousel.json');
    }
    getValentine(){
        return this.http.get('assets/data/valentine.json');
    }
    
   
    getMenu(){
        return this.http.get('assets/data/menu.json');
    }
  
   
}