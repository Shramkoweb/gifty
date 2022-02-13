import { IsEmail, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  userName: string;

  @IsString()
  password: string;

  @IsNumber()
  age?: number;
}
