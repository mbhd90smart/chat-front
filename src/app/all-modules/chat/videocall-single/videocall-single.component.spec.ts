import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocallSingleComponent } from './videocall-single.component';

describe('VideocallSingleComponent', () => {
  let component: VideocallSingleComponent;
  let fixture: ComponentFixture<VideocallSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocallSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocallSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
