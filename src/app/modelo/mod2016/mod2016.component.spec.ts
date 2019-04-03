import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2016Component } from './mod2016.component';

describe('Mod2016Component', () => {
  let component: Mod2016Component;
  let fixture: ComponentFixture<Mod2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
