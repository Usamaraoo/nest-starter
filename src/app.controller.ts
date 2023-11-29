import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {}
  @Post()
  createUser(@Req() request: Request): string {
    return 'Create a new user';
  }

  @Get()
  getAllUsers(@Req() request: Request): string {
    return 'get all users';
  }
  @Get(':username')
  findOne(@Param() params: any): string {
    console.log(params.username);
    return `This action returns a #${params.username} cat`;
  }
}
