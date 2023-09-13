import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserDTO } from '../../users/dto/user.dto';

export class SignupUserResponseDTO {
  @ApiProperty({ description: 'Token' })
  @IsString()
  accessToken: string;

  @ApiProperty({ description: 'Logged in Member object' })
  user: UserDTO;
}
