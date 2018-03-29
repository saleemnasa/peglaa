import { TestBed, inject } from '@angular/core/testing';

import { App.Globals2Service } from './app.globals2.service';

describe('App.Globals2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.Globals2Service]
    });
  });

  it('should be created', inject([App.Globals2Service], (service: App.Globals2Service) => {
    expect(service).toBeTruthy();
  }));
});
