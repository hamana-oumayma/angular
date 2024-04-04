import { TestBed } from '@angular/core/testing';

import { ParticipantconversationService } from './participantconversation.service';

describe('ParticipantconversationService', () => {
  let service: ParticipantconversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantconversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
