import { Module } from '@nestjs/common';
import { ProblemActionsService } from './problem_actions.service';
import { ProblemActionsController } from './problem_actions.controller';

@Module({
  controllers: [ProblemActionsController],
  providers: [ProblemActionsService],
})
export class ProblemActionsModule {}
