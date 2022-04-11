import { TestBed } from '@angular/core/testing';
import { ChatMainService } from './chat-main.service';

describe('ChatMainService', () => {
  let service: ChatMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
