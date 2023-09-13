import { Body, Controller, UseGuards, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Post } from '../decorators';
import { AuthService } from './auth.service';
import { LoginUserResponseDTO } from './dto/login-user-response.dto';
import { SignupUserResponseDTO } from './dto/signup-user-response.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { SignupUserDTO } from './dto/signup-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login', {
    response: {
      model: LoginUserResponseDTO,
      summary: 'User Login',
      description: 'Login with email and password',
    },
  })
  public async userLogin(
    @Body() loginUserDTO: LoginUserDTO,
  ): Promise<LoginUserResponseDTO> {
    return await this.authService.userSignIn(loginUserDTO);
  }

  @Post('sign-up', {
    response: {
      model: SignupUserResponseDTO,
      summary: 'User SignUp',
      description: 'SignUp with user data',
    },
  })
  public async userSignUp(
    @Body() signupUserDTO: SignupUserDTO,
  ): Promise<SignupUserResponseDTO> {
    const response = this.authService.userSignUp(signupUserDTO);
    return response;
  }
}
