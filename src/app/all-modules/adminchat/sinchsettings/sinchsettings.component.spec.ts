import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinchsettingsComponent } from './sinchsettings.component';

describe('SinchsettingsComponent', () => {
  let component: SinchsettingsComponent;
  let fixture: ComponentFixture<SinchsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinchsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinchsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
