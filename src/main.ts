import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Configurando o Swagger
  const config = new DocumentBuilder()
    .setTitle('Api de Livros')
    .setDescription('Documentação da API de livros com NestJs + Swagger')
    .setVersion('1.0')
    .addTag('FernasBook')
    .build();

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  app.useGlobalPipes(new ValidationPipe());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(
    '/reference',
    apiReference({
      content: document,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server runing on PORT: ${process.env.PORT ?? 3000}`);
}
bootstrap();
