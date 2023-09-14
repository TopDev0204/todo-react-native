import { Controller, Param, Body, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Authorized } from '../decorators/authorize.decorator';
import { Delete, Get, Post, Put } from '../decorators/routes.decorator';
import { TasksDTO, TaskDTO } from './dto/task.dto';
import { TaskIdParamDTO } from './dto/taskIdParam.dto';
import { UserIdParamDTO } from 'src/users/dto/userIdParam.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Authorized()
  @Post('', {
    response: {
      model: TaskDTO,
      summary: 'Create Task',
      description: 'Create Task API',
    },
  })
  async createTask(@Body() task: TaskDTO): Promise<TaskDTO> {
    const modifyData = {
      ...task,
    };
    const createdTask = await this.taskService.createTask(modifyData);

    return createdTask;
  }

  @Authorized()
  @Get(':id', {
    response: {
      model: TasksDTO,
      summary: 'Get all tasks by userId',
      description: 'Get list all tasks by userId',
    },
  })
  async getAllTasksByUserId(@Param() param: UserIdParamDTO): Promise<TasksDTO> {
    return this.taskService.findAllByUserId(Number(param.id));
  }

  @Authorized()
  @Put(':id', {
    response: {
      model: TaskDTO,
      summary: 'Update Task By ID',
      description: 'Update Task Data',
    },
  })
  async updateTaskById(
    @Param() param: TaskIdParamDTO,
    @Body() task: TaskDTO,
  ): Promise<TaskDTO> {
    return this.taskService.update(Number(param.id), task);
  }

  @Authorized()
  @Delete(':id', {
    response: {
      model: TaskDTO,
      summary: 'Delete Task By Id',
      description: 'Delete Task Data',
    },
  })
  async deleteTaskById(@Param() param: TaskIdParamDTO): Promise<String> {
    const { id } = param;
    return await this.taskService.delete(Number(id));
  }
}
