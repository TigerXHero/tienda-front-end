import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaldossComponent } from './daldoss.component';

describe('DaldossComponent', () => {
  let component: DaldossComponent;
  let fixture: ComponentFixture<DaldossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaldossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaldossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
