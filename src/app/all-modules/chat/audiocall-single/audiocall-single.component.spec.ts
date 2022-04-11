import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiocallSingleComponent } from './audiocall-single.component';

describe('AudiocallSingleComponent', () => {
  let component: AudiocallSingleComponent;
  let fixture: ComponentFixture<AudiocallSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiocallSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiocallSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
