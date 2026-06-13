import { Controller } from '@nestjs/common';
import { ModemailerService } from './modemailer.service';

@Controller('modemailer')
export class ModemailerController {
  constructor(private readonly modemailerService: ModemailerService) {}
}
