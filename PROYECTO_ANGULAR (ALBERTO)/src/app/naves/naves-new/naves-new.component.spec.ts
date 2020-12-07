import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesNewComponent } from './naves-new.component';

describe('NavesNewComponent', () => {
  let component: NavesNewComponent;
  let fixture: ComponentFixture<NavesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
