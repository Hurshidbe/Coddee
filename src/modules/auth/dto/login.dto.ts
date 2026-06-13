import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength :  6,
    minUppercase: 1
  })
  @MaxLength(64)
  password!: string;
}


export class refreshTwoTokents{
    @IsNotEmpty()
    @IsString()
    refresh_token! : string
}