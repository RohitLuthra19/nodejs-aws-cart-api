import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { AppModule } from './app.module';
import helmet from 'helmet';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());
  await app.init();
  return serverlessExpress({ app: app.getHttpAdapter().getInstance() });
}

export const handler = async (event: any, context: any) => {
  server = server ?? (await bootstrap());
  return server(event, context);
};
