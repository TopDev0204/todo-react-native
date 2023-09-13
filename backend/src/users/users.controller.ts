import { Controller, Param, Body, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Authorized } from '../decorators/authorize.decorator';
import { Delete, Get, Post, Put } from '../decorators/routes.decorator';
import { UsersDTO, UserDTO } from './dto/user.dto';
import { UserIdParamDTO } from './dto/userIdParam.dto';
import { SignupUserDTO } from '../auth/dto/signup-user.dto';
import { hashSync } from 'bcrypt';
import { StringResponseDTO } from './dto/string-response.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Authorized()
  @Post('', {
    response: {
      model: UserDTO,
      summary: 'Create User',
      description: 'Create User API',
    },
  })
  async createUser(@Body() user: SignupUserDTO): Promise<UserDTO> {
    const { Password, Confirm_Password } = user;
    const exist = await this.userService.emailExists(user.Email);

    if (exist) {
      throw new BadRequestException(
        'This email is already registered. Please use other email.',
      );
    }

    if (Password !== Confirm_Password) {
      throw new BadRequestException('Passwords do not match');
    }

    const hashedPassword = await hashSync(Password, 10);
    const modifyData = {
      ...user,
      Password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    //remove confirm_password field
    delete modifyData.Confirm_Password;
    const createdUser = await this.userService.createUser(modifyData);
    delete createdUser.Password;

    return createdUser;
  }

  @Authorized()
  @Get('', {
    response: {
      model: UsersDTO,
      summary: 'Get all users',
      description: 'Get list all users',
    },
  })
  async getAllUsers(): Promise<UsersDTO> {
    return this.userService.findAll();
  }

  @Authorized()
  @Get(':id', {
    response: {
      model: UserDTO,
      summary: 'Get User By ID',
      description: 'Get User Data',
    },
  })
  async getUserById(@Param() param: UserIdParamDTO): Promise<UserDTO> {
    return this.userService.findOne(Number(param.id));
  }

  @Authorized()
  @Put(':id', {
    response: {
      model: UserDTO,
      summary: 'Update User By ID',
      description: 'Update User Data',
    },
  })
  async updateUserById(
    @Param() param: UserIdParamDTO,
    @Body() user: SignupUserDTO,
  ): Promise<UserDTO> {
    return this.userService.update(Number(param.id), user);
  }

  @Authorized()
  @Delete(':id', {
    response: {
      model: StringResponseDTO,
      summary: 'Delete User By Id',
      description: 'Delete User Data',
    },
  })
  async deleteUserById(@Param() param: UserIdParamDTO): Promise<String> {
    const { id } = param;
    return await this.userService.delete(Number(id));
  }
}
