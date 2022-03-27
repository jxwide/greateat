import { Injectable } from '@nestjs/common';
import {Cats} from "./cats.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateCatDto} from "./dto/create-cat.dto";

@Injectable()
export class CatsService {
    constructor(
        @InjectModel(Cats) private catsRepository: typeof Cats
    ) {}

    async createCat(dto: CreateCatDto) {
        const cat = await this.catsRepository.create(dto);
        return cat;
    }

    async getAllCats() {
        const cats = await this.catsRepository.findAll();
        return cats;
    }

    async getCurrentCat(catId) {
        const cat = await this.catsRepository.findOne({where: {id: catId}})
        return cat;
    }

    async deleteCat(catId) {
        const cat = await this.catsRepository.destroy({where: {id: catId}})
        return cat
    }
}
