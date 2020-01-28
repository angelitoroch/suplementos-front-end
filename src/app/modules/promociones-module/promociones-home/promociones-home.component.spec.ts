import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesHomeComponent } from './promociones-home.component';

describe('PromocionesHomeComponent', () => {
  let component: PromocionesHomeComponent;
  let fixture: ComponentFixture<PromocionesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
