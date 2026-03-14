import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response/response.interceptor';
import { PrismaExceptionFilter } from './common/filters/prisma-exception/prisma-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  //documentation
  const config = new DocumentBuilder()
    .setTitle('Care Link v1 api documentation')
    .setDescription('Carelink module')
    .setVersion('1.0')
    .addTag('Carelink')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
