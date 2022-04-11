import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMainHeaderBarComponent } from './header-bar.component';

describe('ChatMainChatMainHeaderBarComponent', () => {
  let component: ChatMainHeaderBarComponent;
  let fixture: ComponentFixture<ChatMainHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatMainHeaderBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMainHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
