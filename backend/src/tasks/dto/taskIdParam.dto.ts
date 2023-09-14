import { ApiProperty } from '@nestjs/swagger';

export class TaskIdParamDTO {
  @ApiProperty({
    description: 'task id',
    default: '',
    required: true,
  })
  id: string;
}
