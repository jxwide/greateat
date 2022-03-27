import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Cats} from "./cats.model";

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    imports: [
        SequelizeModule.forFeature([Cats])
    ]
})
export class CatsModule {}
