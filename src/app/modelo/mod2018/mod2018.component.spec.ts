import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2018Component } from './mod2018.component';

describe('Mod2018Component', () => {
  let component: Mod2018Component;
  let fixture: ComponentFixture<Mod2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
