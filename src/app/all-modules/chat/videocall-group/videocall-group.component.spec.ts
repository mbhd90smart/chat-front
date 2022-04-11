import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocallGroupComponent } from './videocall-group.component';

describe('VideocallGroupComponent', () => {
  let component: VideocallGroupComponent;
  let fixture: ComponentFixture<VideocallGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocallGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocallGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
