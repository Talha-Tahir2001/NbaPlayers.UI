import { TestBed } from '@angular/core/testing';

import { NbaPlayersService } from './nba-players.service';

describe('NbaPlayersService', () => {
  let service: NbaPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
