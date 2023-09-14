import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Tasks } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTask(taskData) {
    const task = await this.prismaService.tasks.create({
      data: taskData,
    });
    return task;
  }

  async findAllByUserId(user_id: number): Promise<any> {
    return await this.prismaService.tasks.findMany({
      where: { userId: user_id },
    });
  }

  async update(id: number, task: any): Promise<Tasks> {
    const modifyData = {
      ...task,
    };
    //remove confirm_password field
    delete modifyData.Confirm_Password;
    return await this.prismaService.tasks.update({
      where: {
        id,
      },
      data: modifyData,
    });
  }

  async delete(id: number): Promise<String> {
    await this.prismaService.tasks.delete({
      where: { id },
    });
    return 'success';
  }
}
