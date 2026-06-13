import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProblemDiscussionsService } from './problem_discussions.service';
import { CreateProblemDiscussionDto } from './dto/create-problem_discussion.dto';
import { UpdateProblemDiscussionDto } from './dto/update-problem_discussion.dto';

@Controller('problem-discussions')
export class ProblemDiscussionsController {
  constructor(private readonly problemDiscussionsService: ProblemDiscussionsService) {}

  @Post()
  create(@Body() createProblemDiscussionDto: CreateProblemDiscussionDto) {
    return this.problemDiscussionsService.create(createProblemDiscussionDto);
  }

  @Get()
  findAll() {
    return this.problemDiscussionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.problemDiscussionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProblemDiscussionDto: UpdateProblemDiscussionDto) {
    return this.problemDiscussionsService.update(+id, updateProblemDiscussionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.problemDiscussionsService.remove(+id);
  }
}
