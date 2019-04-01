import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarredorasComponent } from './barredoras.component';

describe('BarredorasComponent', () => {
  let component: BarredorasComponent;
  let fixture: ComponentFixture<BarredorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarredorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarredorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
