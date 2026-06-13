import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReactionDiscussionsService } from './reaction_discussions.service';
import { CreateReactionDiscussionDto } from './dto/create-reaction_discussion.dto';
import { UpdateReactionDiscussionDto } from './dto/update-reaction_discussion.dto';

@Controller('reaction-discussions')
export class ReactionDiscussionsController {
  constructor(private readonly reactionDiscussionsService: ReactionDiscussionsService) {}

  @Post()
  create(@Body() createReactionDiscussionDto: CreateReactionDiscussionDto) {
    return this.reactionDiscussionsService.create(createReactionDiscussionDto);
  }

  @Get()
  findAll() {
    return this.reactionDiscussionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reactionDiscussionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReactionDiscussionDto: UpdateReactionDiscussionDto) {
    return this.reactionDiscussionsService.update(+id, updateReactionDiscussionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reactionDiscussionsService.remove(+id);
  }
}
