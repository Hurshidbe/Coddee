import { Injectable } from '@nestjs/common';
import { CreateProblemActionDto } from './dto/create-problem_action.dto';
import { UpdateProblemActionDto } from './dto/update-problem_action.dto';

@Injectable()
export class ProblemActionsService {
  create(createProblemActionDto: CreateProblemActionDto) {
    return 'This action adds a new problemAction';
  }

  findAll() {
    return `This action returns all problemActions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} problemAction`;
  }

  update(id: number, updateProblemActionDto: UpdateProblemActionDto) {
    return `This action updates a #${id} problemAction`;
  }

  remove(id: number) {
    return `This action removes a #${id} problemAction`;
  }
}
