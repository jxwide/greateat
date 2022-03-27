import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {CreateOrderDto} from "./dto/create-order.dto";

@Controller('api/orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    create(@Body() orderDto: CreateOrderDto) {
        return this.ordersService.createOrder(orderDto)
    }

    @Get('/active')
    getActiveOrders() {
        return this.ordersService.getActiveOrders()
    }

    @Get('/done/:oId')
    makeDoneOrder(@Param('oId') oId) {
        return this.ordersService.changeOrderDone(oId, true)
    }
}
