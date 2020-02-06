import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { JobSearchService } from './job-search.service';
import { JobSearchController } from './job-search.controller';
import { JobApiFactory } from './api/job-api.factory';

import { GitHubApiService } from './api/github/github.api.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [JobSearchService, JobApiFactory, GitHubApiService],
  controllers: [JobSearchController]
})
export class JobSearchModule {}
