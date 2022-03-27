import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Goods} from "./goods.model";

@Module({
    controllers: [GoodsController],
    providers: [GoodsService],
    imports: [
        SequelizeModule.forFeature([Goods])
    ]
})
export class GoodsModule {}
