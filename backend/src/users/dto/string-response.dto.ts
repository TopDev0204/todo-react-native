import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class StringResponseDTO {
  @ApiProperty()
  @IsString()
  data: string;
}
