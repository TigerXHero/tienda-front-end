import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalasCargadorasComponent } from './palas-cargadoras.component';

describe('PalasCargadorasComponent', () => {
  let component: PalasCargadorasComponent;
  let fixture: ComponentFixture<PalasCargadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalasCargadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalasCargadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
