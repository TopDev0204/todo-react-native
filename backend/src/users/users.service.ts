import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneByEmail(email: string): Promise<Users> {
    try {
      const user = await this.prismaService.users.findFirst({
        where: {
          Email: email,
        },
      });

      if (!user) {
        throw new HttpException('Email does not exist', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      throw new NotFoundException(`User with useremail ${email} not found`);
    }
  }

  async emailExists(email: string): Promise<boolean> {
    const user = await this.prismaService.users.findUnique({
      where: { Email: email },
    });
    return !!user;
  }

  async createUser(userData) {
    const user = await this.prismaService.users.create({
      data: userData,
    });
    return user;
  }

  async findAll(): Promise<any> {
    return await this.prismaService.users.findMany();
  }

  async findOne(id: number): Promise<Users> {
    return await this.prismaService.users.findUnique({
      where: { id },
    });
  }

  async update(id: number, user: any): Promise<Users> {
    const { Password, Confirm_Password } = user;
    if (Password !== Confirm_Password) {
      throw new BadRequestException('Passwords do not match');
    }
    const hashedPassword = await hashSync(Password, 10);

    const modifyData = {
      ...user,
      Password: hashedPassword,
    };
    //remove confirm_password field
    delete modifyData.Confirm_Password;
    return await this.prismaService.users.update({
      where: {
        id,
      },
      data: modifyData,
    });
  }

  async delete(id: number): Promise<String> {
    await this.prismaService.users.delete({
      where: { id },
    });
    return 'success';
  }
}
