import {
  applyDecorators,
  Delete as NestDelete,
  Get as NestGet,
  HttpCode,
  Patch as NestPatch,
  Post as NestPost,
  Put as NestPut,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

type RouteOptions = {
  response: {
    model: Function;
    summary: string;
    description: string;
    isArray?: boolean;
    resp_description?: string;
  };
  encoding?: string;
};

export const Get = (route: string, options: RouteOptions) => {
  return applyDecorators(
    ApiOperation({
      summary: options.response.summary,
      description: options.response.description,
    }),
    ApiOkResponse({
      type: options.response.model,
      isArray: options.response.isArray,
      description: options.response.resp_description || '',
    }),
    NestGet(route),
  );
};

export const Delete = (route: string, options: RouteOptions) => {
  return applyDecorators(
    ApiOperation({
      summary: options.response.summary,
      description: options.response.description,
    }),
    ApiOkResponse({
      type: options.response.model,
      description: options.response.resp_description || '',
    }),
    NestDelete(route),
  );
};

export const Post = (route: string, options: RouteOptions) => {
  return applyDecorators(
    ApiOperation({
      summary: options.response.summary,
      description: options.response.description,
    }),
    ApiOkResponse({
      type: options.response.model,
      description: options.response.resp_description || '',
    }),
    HttpCode(200),
    NestPost(route),
  );
};

export const Put = (route: string, options: RouteOptions) => {
  return applyDecorators(
    ApiOperation({
      summary: options.response.summary,
      description: options.response.description,
    }),
    ApiOkResponse({
      type: options.response.model,
      description: options.response.resp_description || '',
    }),
    NestPut(route),
  );
};

export const Patch = (route: string, options: RouteOptions) => {
  return applyDecorators(
    ApiOperation({
      summary: options.response.summary,
      description: options.response.description,
    }),
    ApiOkResponse({
      type: options.response.model,
      description: options.response.resp_description || '',
    }),
    HttpCode(200),
    NestPatch(route),
  );
};
