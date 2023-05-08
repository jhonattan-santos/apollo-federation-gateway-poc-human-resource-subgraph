import { Test, TestingModule } from '@nestjs/testing';
import { HumanResourceResolver } from './human-resource.resolver';

describe('HumanResourceResolver', () => {
  let resolver: HumanResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HumanResourceResolver],
    }).compile();

    resolver = module.get<HumanResourceResolver>(HumanResourceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
