import { Module } from '@nestjs/common';
import { PropertiesModule } from './properties/properties.module';
import { MongooseModule } from '@nestjs/mongoose';

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
export class AppModule {}
