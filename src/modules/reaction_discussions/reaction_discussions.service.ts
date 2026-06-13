import { Injectable } from '@nestjs/common';
import { CreateReactionDiscussionDto } from './dto/create-reaction_discussion.dto';
import { UpdateReactionDiscussionDto } from './dto/update-reaction_discussion.dto';

@Injectable()
export class ReactionDiscussionsService {
  create(createReactionDiscussionDto: CreateReactionDiscussionDto) {
    return 'This action adds a new reactionDiscussion';
  }

  findAll() {
    return `This action returns all reactionDiscussions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reactionDiscussion`;
  }

  update(id: number, updateReactionDiscussionDto: UpdateReactionDiscussionDto) {
    return `This action updates a #${id} reactionDiscussion`;
  }

  remove(id: number) {
    return `This action removes a #${id} reactionDiscussion`;
  }
}
