import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsStrongPassword,
  IsLowercase,
  Matches,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9_]+$/)
  @IsLowercase()
  @MinLength(3)
  @MaxLength(30)
  username!: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength : 6,
    minSymbols:1
  })
  @MaxLength(64)
  password!: string;

  @MaxLength(64)
  @IsString()
  @IsNotEmpty()
  confirmPassword!: string;
}
