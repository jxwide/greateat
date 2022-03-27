import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.usersService.registration(userDto)
    }

    @Post('/login')
    login(@Body() loginDto: LoginUserDto) {
        return this.usersService.login(loginDto)
    }
}
