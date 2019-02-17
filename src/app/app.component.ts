import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Navbar } from './model/navbar';
import { NavBar2 } from './model/navBar2';
import { Navbar4 } from './model/navbar4';
import { Carousel } from './model/carousel';
import { Valentine } from './model/valentine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loopLab';
  navigationBar: Navbar[] = [];
  navigation: NavBar2[] =[];
  navigatio: Navbar4[] =[];
  carousel: Carousel [] =[];
  valentine:Valentine[] =[];
  constructor(private dataService: DataService) {
    this.dataService.getNavbar().subscribe(
      res=>{
        this.navigationBar=JSON.parse(JSON.stringify(res));
        console.log(res);
      }
    );
    this.dataService.getNavBar2().subscribe(
      res=>{
        this.navigation=JSON.parse(JSON.stringify(res));
        console.log(res);
      }
    );
    this.dataService.getNavbar4().subscribe(
      res=>{
        this.navigatio=JSON.parse(JSON.stringify(res));
        console.log(res);
      }
    );

    this.dataService.getCarousel().subscribe(
      res=>{
        this.carousel=JSON.parse(JSON.stringify(res));
        console.log(res);
      }
    );
    this.dataService.getValentine().subscribe(
      res=>{
        this.valentine=JSON.parse(JSON.stringify(res));
        console.log(res);
      }
    );
  }
}

