import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileSettingsService } from './profile_settings.service';
import { CreateProfileSettingDto } from './dto/create-profile_setting.dto';
import { UpdateProfileSettingDto } from './dto/update-profile_setting.dto';

@Controller('profile-settings')
export class ProfileSettingsController {
  constructor(private readonly profileSettingsService: ProfileSettingsService) {}

  @Post()
  create(@Body() createProfileSettingDto: CreateProfileSettingDto) {
    return this.profileSettingsService.create(createProfileSettingDto);
  }

  @Get()
  findAll() {
    return this.profileSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileSettingDto: UpdateProfileSettingDto) {
    return this.profileSettingsService.update(+id, updateProfileSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileSettingsService.remove(+id);
  }
}
