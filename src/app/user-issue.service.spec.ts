import { TestBed } from '@angular/core/testing';

import { UserIssueService } from './user-issue.service';

describe('UserIssueService', () => {
  let service: UserIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
