import {Column, DataType, Model, Table} from "sequelize-typescript";

interface OrdersCreationAttrs {
    goodId: number;
    clientId: number;
    addressAndInfo: string;
}

@Table({tableName: 'orders'})
export class Orders extends Model<Orders, OrdersCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    goodId: number;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    done: boolean;

    @Column({type: DataType.INTEGER, allowNull: true})
    clientId: number;

    @Column({type: DataType.STRING, allowNull: true})
    addressAndInfo: string;
}