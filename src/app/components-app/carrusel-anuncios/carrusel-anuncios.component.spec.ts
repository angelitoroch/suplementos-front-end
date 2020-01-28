import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselAnunciosComponent } from './carrusel-anuncios.component';

describe('CarruselAnunciosComponent', () => {
  let component: CarruselAnunciosComponent;
  let fixture: ComponentFixture<CarruselAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
