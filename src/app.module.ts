import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PropertiesModule } from './properties/properties.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as cors from 'cors';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://inmodb:inmo2024@cluster0.sfsicho.mongodb.net/',
    ),
    PropertiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
