import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomatsuComponent } from './komatsu.component';

describe('KomatsuComponent', () => {
  let component: KomatsuComponent;
  let fixture: ComponentFixture<KomatsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomatsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomatsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
