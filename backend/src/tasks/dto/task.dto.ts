import { ApiProperty } from '@nestjs/swagger';

export class TaskDTO {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: 'User id' })
  userId: number;

  @ApiProperty({ description: 'Title' })
  Title?: string;

  @ApiProperty({ description: 'Description' })
  Description: string;

  @ApiProperty({ description: 'due Date' })
  dueDate?: string;
}

export class TasksDTO {
  @ApiProperty({
    isArray: true,
    type: TaskDTO,
  })
  tasks: Array<TaskDTO>;
}
