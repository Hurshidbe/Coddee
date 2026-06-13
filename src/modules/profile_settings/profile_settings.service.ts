import { Injectable } from '@nestjs/common';
import { CreateProfileSettingDto } from './dto/create-profile_setting.dto';
import { UpdateProfileSettingDto } from './dto/update-profile_setting.dto';

@Injectable()
export class ProfileSettingsService {
  create(createProfileSettingDto: CreateProfileSettingDto) {
    return 'This action adds a new profileSetting';
  }

  findAll() {
    return `This action returns all profileSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profileSetting`;
  }

  update(id: number, updateProfileSettingDto: UpdateProfileSettingDto) {
    return `This action updates a #${id} profileSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} profileSetting`;
  }
}
