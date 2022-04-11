import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiocallGroupComponent } from './audiocall-group.component';

describe('AudiocallGroupComponent', () => {
  let component: AudiocallGroupComponent;
  let fixture: ComponentFixture<AudiocallGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiocallGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiocallGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
