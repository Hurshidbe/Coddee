import { Module } from '@nestjs/common';
import { ProfileSettingsService } from './profile_settings.service';
import { ProfileSettingsController } from './profile_settings.controller';

@Module({
  controllers: [ProfileSettingsController],
  providers: [ProfileSettingsService],
})
export class ProfileSettingsModule {}
