import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //
  it('debe contener un titulo-->', async() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('header works!');

  });
//  TODO: para capturar una propiedad
  it('debe contener un logo', async() => {
    expect(fixture.nativeElement.querySelector('[data-logo="logo"]')).toBeTruthy();
  });

  it('debe contener un menu', async() => {
    expect(fixture.nativeElement.querySelector('[data-menu="menu"]')).toBeTruthy();
  });
  it('debe contener un search', async() => {
    expect(fixture.nativeElement.querySelector('[data-search="search"]')).toBeTruthy();
  });

});
