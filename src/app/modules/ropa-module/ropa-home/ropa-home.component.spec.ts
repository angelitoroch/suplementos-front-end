import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaHomeComponent } from './ropa-home.component';

describe('RopaHomeComponent', () => {
  let component: RopaHomeComponent;
  let fixture: ComponentFixture<RopaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RopaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
