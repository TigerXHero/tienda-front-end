import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocultoresComponent } from './motocultores.component';

describe('MotocultoresComponent', () => {
  let component: MotocultoresComponent;
  let fixture: ComponentFixture<MotocultoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotocultoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotocultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
