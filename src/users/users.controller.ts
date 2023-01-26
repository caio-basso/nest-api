import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get()
  fetchAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':name')
  fetchOneUser(@Param() params) {
    return this.usersService.findOneUsers(params.name);
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}