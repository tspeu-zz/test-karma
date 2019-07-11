import { Component, OnInit } from '@angular/core';
import {DataService  } from "../services/data.service";

import { of } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private dataService: DataService) { }

  homes$;

  ngOnInit() {

    this.homes$ = this.dataService.getHomes$();
    // of([
    //   {title: 'Home1', image: 'assets/home1.png', location: 'Adeje' },
    //   {title: 'Home2', image: 'assets/home2.png', location: 'La palma' },
    //   {title: 'Home3', image: 'assets/home3.png', location: 'Galway' },
    // ]);
  }

}
