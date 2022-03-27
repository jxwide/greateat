import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Goods} from "./goods.model";
import {CreateGoodsDto} from "./dto/create-goods.dto";

@Injectable()
export class GoodsService {
    constructor(
        @InjectModel(Goods) private goodsRepository: typeof Goods
    ) {}

    async createGoods(dto: CreateGoodsDto) {
        const good = await this.goodsRepository.create(dto);
        return good;
    }

    async getAllGoods() {
        const goods = await this.goodsRepository.findAll();
        return goods;
    }

    async getGoodsByCat(catId) {
        const goods = await this.goodsRepository.findAll({
            where: {byCat: catId}
        })

        return goods;
    }
}
