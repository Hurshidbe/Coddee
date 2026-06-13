import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileSettingDto } from './create-profile_setting.dto';

export class UpdateProfileSettingDto extends PartialType(CreateProfileSettingDto) {}
