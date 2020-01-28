import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemateHomeComponent } from './remate-home.component';

describe('RemateHomeComponent', () => {
  let component: RemateHomeComponent;
  let fixture: ComponentFixture<RemateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
