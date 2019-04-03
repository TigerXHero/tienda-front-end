import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasseyFergusonComponent } from './massey-ferguson.component';

describe('MasseyFergusonComponent', () => {
  let component: MasseyFergusonComponent;
  let fixture: ComponentFixture<MasseyFergusonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasseyFergusonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasseyFergusonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
