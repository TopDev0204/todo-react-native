import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignupUserDTO {
  @ApiProperty({ description: 'Username' })
  @IsNotEmpty()
  Username: string;

  @ApiProperty({ description: 'Email', format: 'email' })
  @IsEmail()
  Email: string;

  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  Password: string;

  @ApiProperty({ description: 'Confrim Password' })
  @IsNotEmpty()
  Confirm_Password: string;
}
