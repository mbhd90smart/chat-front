import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordMobileComponent } from './forgotpassword-mobile.component';

describe('ForgotpasswordMobileComponent', () => {
  let component: ForgotpasswordMobileComponent;
  let fixture: ComponentFixture<ForgotpasswordMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
