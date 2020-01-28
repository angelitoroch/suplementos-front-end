import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselCardComponent } from './carrusel-card.component';

describe('CarruselCardComponent', () => {
  let component: CarruselCardComponent;
  let fixture: ComponentFixture<CarruselCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
