import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getHomes$() {
    return of([
      {title: 'Home1', image: 'assets/home1.png', location: 'Adeje' },
        {title: 'Home2', image: 'assets/home2.png', location: 'La palma' },
        {title: 'Home3', image: 'assets/home3.png', location: 'Galway' },
    ]);
  }
}
