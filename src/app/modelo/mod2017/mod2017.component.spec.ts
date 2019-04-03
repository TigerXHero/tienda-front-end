import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2017Component } from './mod2017.component';

describe('Mod2017Component', () => {
  let component: Mod2017Component;
  let fixture: ComponentFixture<Mod2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
