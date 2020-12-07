import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesDetailsComponent } from './naves-details.component';

describe('NavesDetailsComponent', () => {
  let component: NavesDetailsComponent;
  let fixture: ComponentFixture<NavesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
