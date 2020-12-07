import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesEditComponent } from './naves-edit.component';

describe('NavesEditComponent', () => {
  let component: NavesEditComponent;
  let fixture: ComponentFixture<NavesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
