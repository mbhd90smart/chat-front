import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmobComponent } from './admob.component';

describe('AdmobComponent', () => {
  let component: AdmobComponent;
  let fixture: ComponentFixture<AdmobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
