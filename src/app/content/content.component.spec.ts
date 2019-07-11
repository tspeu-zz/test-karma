import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
//
// import {  spyOnClass } from 'jasmine-es6-spies';
// import { DataService } from '../services/data.service';
import { of } from 'rxjs';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  // let dataService: any;
  // jasmine.SpyObj<DataService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComponent ]
      // providers: [
      //   {provide: DataService, userFactory: () =>  spyOnClass(DataService)}
      // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;

    // dataService = TestBed.get(DataService);

    // dataService.getHomes$.and.returnValue(of([
    //   {title: 'Home1', image: 'assets/home1.png', location: 'Adeje' },
    //   {title: 'Home2', image: 'assets/home2.png', location: 'La palma' },
    //   {title: 'Home3', image: 'assets/home3.png', location: 'Galway' },
    // ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // querySelectorAll recoge una array con todos los elemntos
  it('debe mostrar contener Home title..', async() => {



    expect(fixture.nativeElement.querySelectorAll('[data = "home"]').length).toBe(3);
  });
  // querySelectorAll recoge una array con todos los elemntos
  it('debe mostrar lista de..', async() => {
    const homeTEST = fixture.nativeElement.querySelector('[data = "home"]');

    expect(homeTEST.querySelector('[data="title"]').innerText).toEqual('Home1');
    expect(homeTEST.querySelector('[data="location"]').innerText).toEqual('Adeje');
    expect(homeTEST.querySelector('[data="image"]')).toBeTruthy();

  });



});
