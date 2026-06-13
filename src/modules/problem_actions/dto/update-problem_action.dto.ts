import { PartialType } from '@nestjs/mapped-types';
import { CreateProblemActionDto } from './create-problem_action.dto';

export class UpdateProblemActionDto extends PartialType(CreateProblemActionDto) {}
