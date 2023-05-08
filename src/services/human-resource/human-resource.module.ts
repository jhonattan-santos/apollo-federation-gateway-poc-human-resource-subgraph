import { Module } from '@nestjs/common';
import { HumanResourceService } from './human-resource.service';
import { HumanResourceResolver } from './human-resource.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [HumanResourceService, HumanResourceResolver],
  exports: [HumanResourceService],
})
export class HumanResourceModule {}
