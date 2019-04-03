import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChagnfaComponent } from './chagnfa.component';

describe('ChagnfaComponent', () => {
  let component: ChagnfaComponent;
  let fixture: ComponentFixture<ChagnfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChagnfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChagnfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
