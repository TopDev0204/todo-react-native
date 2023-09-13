import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import * as express from 'express';
import { Logger } from "@nestjs/common";


function bootstrapSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Yummytakeaways BackEnd API')
    .setDescription('yummytakeaways new website version 1.0')
    .setVersion('1.0.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'authorization',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'origin',
      'authorization',
      'content-type',
      'x-requested-with',
      'x-device-type',
    ],
  });
  app.use('/uploads', express.static('./public'));
  app.setGlobalPrefix('api/v1');
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  bootstrapSwagger(app);

  await app.listen(8888);
  Logger.log(`Listened on PORT ${process.env.PORT}`);

}

bootstrap();


