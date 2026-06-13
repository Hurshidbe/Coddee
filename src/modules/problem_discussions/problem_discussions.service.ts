import { Injectable } from '@nestjs/common';
import { CreateProblemDiscussionDto } from './dto/create-problem_discussion.dto';
import { UpdateProblemDiscussionDto } from './dto/update-problem_discussion.dto';

@Injectable()
export class ProblemDiscussionsService {
  create(createProblemDiscussionDto: CreateProblemDiscussionDto) {
    return 'This action adds a new problemDiscussion';
  }

  findAll() {
    return `This action returns all problemDiscussions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} problemDiscussion`;
  }

  update(id: number, updateProblemDiscussionDto: UpdateProblemDiscussionDto) {
    return `This action updates a #${id} problemDiscussion`;
  }

  remove(id: number) {
    return `This action removes a #${id} problemDiscussion`;
  }
}
