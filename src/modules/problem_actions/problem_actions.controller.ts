import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProblemActionsService } from './problem_actions.service';
import { CreateProblemActionDto } from './dto/create-problem_action.dto';
import { UpdateProblemActionDto } from './dto/update-problem_action.dto';

@Controller('problem-actions')
export class ProblemActionsController {
  constructor(private readonly problemActionsService: ProblemActionsService) {}

  @Post()
  create(@Body() createProblemActionDto: CreateProblemActionDto) {
    return this.problemActionsService.create(createProblemActionDto);
  }

  @Get()
  findAll() {
    return this.problemActionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.problemActionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProblemActionDto: UpdateProblemActionDto) {
    return this.problemActionsService.update(+id, updateProblemActionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.problemActionsService.remove(+id);
  }
}
