import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {GoodsService} from "./goods.service";
import {CreateGoodsDto} from "./dto/create-goods.dto";

@Controller('api/goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) {}

    @Post()
    create(@Body() goodDto: CreateGoodsDto) {
        return this.goodsService.createGoods(goodDto)
    }

    @Get()
    getAll() {
        return this.goodsService.getAllGoods()
    }

    @Get('/cat/:catId')
    getGoodsByCat(@Param('catId') catId) {
        return this.goodsService.getGoodsByCat(parseInt(catId))
    }
}
