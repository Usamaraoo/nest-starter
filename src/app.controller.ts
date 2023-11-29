import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUsers(@Req() request:Request): string {
    return 'get all users';
  }
}
