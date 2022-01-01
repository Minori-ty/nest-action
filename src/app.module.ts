import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, AdminController, UserController],
  providers: [AppService],
})
export class AppModule {}
