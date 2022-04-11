import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasesettingsComponent } from './firebasesettings.component';

describe('FirebasesettingsComponent', () => {
  let component: FirebasesettingsComponent;
  let fixture: ComponentFixture<FirebasesettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebasesettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
