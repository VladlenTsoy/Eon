import { TestBed } from '@angular/core/testing';

import { TrialLessonService } from './trial-lesson.service';

describe('TrialLessonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrialLessonService = TestBed.get(TrialLessonService);
    expect(service).toBeTruthy();
  });
});
