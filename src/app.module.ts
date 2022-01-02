import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/user.schema';
import { UsserService } from './service/usser/usser.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema, collection: 'user' },
    ]),
  ],
  controllers: [AppController, AdminController, UserController],
  providers: [AppService, UsserService],
})
export class AppModule {}
