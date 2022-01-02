import { Test, TestingModule } from '@nestjs/testing';
import { UsserService } from './usser.service';

describe('UsserService', () => {
  let service: UsserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsserService],
    }).compile();

    service = module.get<UsserService>(UsserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
