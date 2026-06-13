import { PartialType } from '@nestjs/mapped-types';
import { CreateProblemDiscussionDto } from './create-problem_discussion.dto';

export class UpdateProblemDiscussionDto extends PartialType(CreateProblemDiscussionDto) {}
