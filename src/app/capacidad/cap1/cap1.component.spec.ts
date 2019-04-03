import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap1Component } from './cap1.component';

describe('Cap1Component', () => {
  let component: Cap1Component;
  let fixture: ComponentFixture<Cap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
