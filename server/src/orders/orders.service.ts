import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {CreateOrderDto} from "./dto/create-order.dto";

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Orders) private ordersRepository: typeof Orders
    ) {}

    async createOrder(dto: CreateOrderDto) {
        const order = await this.ordersRepository.create(dto);
        return order;
    }

    async getActiveOrders() {
        const orders = await this.ordersRepository.findAll({
            where: {done: false}
        });
        return orders
    }

    async changeOrderDone(orderId, state) {
        let result = await this.ordersRepository.update({done: state}, {
            where: {
                id: orderId
            }
        });
        return result
    }
}
