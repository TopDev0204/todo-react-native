import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hashSync } from 'bcrypt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async userSignIn(data) {
    const { Email, Password } = data;
    const user = await this.userService.findOneByEmail(Email);
    const matches = await bcrypt.compare(Password, user.Password);
    if (user && matches) {
      delete user.Password;
      return {
        accessToken: await this.jwtService.signAsync(user),
        user: user,
      };
    } else {
      throw new BadRequestException('Password is Wrong');
    }
  }

  async userSignUp(userData) {
    const { Password, Confirm_Password } = userData;
    const exist = await this.userService.emailExists(userData.Email);

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
      ...userData,
      Password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    //remove confirm_password field
    delete modifyData.Confirm_Password;
    const createdUser = await this.userService.createUser(modifyData);

    const payload = {
      sub: createdUser.id,
      Username: createdUser.Username,
      Email: createdUser.Email,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      user: createdUser,
      accessToken: accessToken,
    };
  }
}
