import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemateComponent } from './remate.component';

describe('RemateComponent', () => {
  let component: RemateComponent;
  let fixture: ComponentFixture<RemateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
