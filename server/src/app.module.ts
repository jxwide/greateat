import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {Cats} from "./cats/cats.model";
import {Goods} from "./goods/goods.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        GoodsModule,
        CatsModule,
        UsersModule,
        OrdersModule,
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASS,
            database: process.env.POSTGRES_DB,
            models: [
                Cats, Goods
            ],
            autoLoadModels: true
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
