import { Module } from '@nestjs/common';
import { ProblemDiscussionsService } from './problem_discussions.service';
import { ProblemDiscussionsController } from './problem_discussions.controller';

@Module({
  controllers: [ProblemDiscussionsController],
  providers: [ProblemDiscussionsService],
})
export class ProblemDiscussionsModule {}
