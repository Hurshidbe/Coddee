import { PartialType } from '@nestjs/mapped-types';
import { CreateReactionDiscussionDto } from './create-reaction_discussion.dto';

export class UpdateReactionDiscussionDto extends PartialType(CreateReactionDiscussionDto) {}
