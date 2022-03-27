import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {CreateCatDto} from "./dto/create-cat.dto";

@Controller('api/cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() catDto: CreateCatDto) {
        return this.catsService.createCat(catDto)
    }

    @Get()
    getAll() {
        return this.catsService.getAllCats()
    }

    @Get('/id/:id')
    getById(@Param('id') pId) {
        return this.catsService.getCurrentCat(parseInt(pId))
    }

    @Get('/remove/:id')
    removeById(@Param('id') pId) {
        return this.catsService.deleteCat(parseInt(pId))
    }
}
