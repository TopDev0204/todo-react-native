import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

export const Authorized = () => {
  return applyDecorators(
    UseGuards(AuthGuard('jwt')),
    ApiBearerAuth('authorization'),
  );
};
