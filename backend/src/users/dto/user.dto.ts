import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class UserDTO {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: 'Created Time' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: 'Updated Time' })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({ description: 'Username' })
  Username?: string;

  @ApiProperty({ description: 'Email' })
  Email: string;

  @ApiProperty({ description: 'Password' })
  Password?: string;
}

export class UsersDTO {
  @ApiProperty({
    isArray: true,
    type: UserDTO,
  })
  users: Array<UserDTO>;
}
