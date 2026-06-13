import { Module } from '@nestjs/common';
import { ReactionDiscussionsService } from './reaction_discussions.service';
import { ReactionDiscussionsController } from './reaction_discussions.controller';

@Module({
  controllers: [ReactionDiscussionsController],
  providers: [ReactionDiscussionsService],
})
export class ReactionDiscussionsModule {}
