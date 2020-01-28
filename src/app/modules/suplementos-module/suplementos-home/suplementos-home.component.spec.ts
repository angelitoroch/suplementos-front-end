import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosHomeComponent } from './suplementos-home.component';

describe('SuplementosHomeComponent', () => {
  let component: SuplementosHomeComponent;
  let fixture: ComponentFixture<SuplementosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplementosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplementosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
