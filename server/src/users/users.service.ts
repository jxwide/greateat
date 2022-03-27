import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Users} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import { JwtService } from '@nestjs/jwt';
import {LoginUserDto} from "./dto/login-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users) private usersRepository: typeof Users,
        private jwtService: JwtService
    ) {}

    async registration(dto: CreateUserDto) {
        try {
            const candidate = await this.usersRepository.findOne({where: {email: dto.email}})
            if (!candidate) {
                const newUser = await this.usersRepository.create(dto)

                // jwt
                let payload = {...dto}
                let token = this.jwtService.sign(payload)

                return token;
            } else throw new Error('Email already exists!')
        } catch (e) {
            return e.message
        }
    }

    async login(dto: LoginUserDto) {
        try {
            const candidate = await this.usersRepository.findOne({where: {email: dto.email}})
            if (!candidate) throw new Error('User not found')

            let payload = {...candidate['dataValues']}
            let token = this.jwtService.sign(payload)

            return token
        } catch (e) {
            return e.message
        }
    }
}
