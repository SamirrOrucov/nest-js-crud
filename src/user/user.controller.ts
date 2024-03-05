import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreatePersonDto } from './dto/create-users.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() allProps: CreatePersonDto) {
    return this.userService.createUser(allProps);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getOne(@Param('id') id) {
    return this.userService.getUserById(id);
  }
  @Put(':id')
  update(@Param('id') id, @Body() allProps: CreatePersonDto) {
    return this.userService.update(id, allProps);
  }
}
