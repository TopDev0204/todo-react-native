import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDTO {
  @ApiProperty({ description: 'Email', format: 'email' })
  Email: string;

  @ApiProperty({ description: 'Password' })
  Password: string;
}
