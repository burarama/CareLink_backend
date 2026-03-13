import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response/response.interceptor';
import { PrismaExceptionFilter } from './common/filters/prisma-exception/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //api prefix
  app.setGlobalPrefix('api');

  //api
  app.useGlobalInterceptors(new ResponseInterceptor());
  //database errors
  app.useGlobalFilters(new PrismaExceptionFilter());

  //api versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
