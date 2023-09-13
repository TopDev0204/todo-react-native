import { ApiProperty } from '@nestjs/swagger';

export class UserIdParamDTO {
  @ApiProperty({
    description: 'user id',
    default: '',
    required: true,
  })
  id: string;
}
