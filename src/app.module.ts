import { Module } from '@nestjs/common';
import { UserController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [AppService],
})
export class AppModule {}
