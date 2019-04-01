import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontacargasComponent } from './montacargas.component';

describe('MontacargasComponent', () => {
  let component: MontacargasComponent;
  let fixture: ComponentFixture<MontacargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontacargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontacargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
