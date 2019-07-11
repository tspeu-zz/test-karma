import { Component, OnInit } from '@angular/core';
// import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // homes$: any;

  constructor() { }

  ngOnInit() {

    // this.homes$ = of([
    // {title: 'Home1', image: 'asstes/home1.jpg', location: 'Ny'},
    // {title: 'Home2', image: 'asstes/home2.jpg', location: 'CA'},
    // {title: 'Home3', image: 'asstes/home3.jpg', location: 'SA'}
    // ]);

  }

}
