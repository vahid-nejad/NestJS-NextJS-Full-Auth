import { IsString, IsEmail, IsUrl, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
