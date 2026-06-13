import { Module } from '@nestjs/common';
import { ModemailerService } from './modemailer.service';
import { ModemailerController } from './modemailer.controller';

@Module({
  controllers: [ModemailerController],
  providers: [ModemailerService],
})
export class ModemailerModule {}
