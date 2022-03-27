import {Column, DataType, Model, Table} from "sequelize-typescript";

interface GoodsCreationAttrs {
    title: string;
    description: string;
    composition: string;
    price: number;
    byCat: number;
}

@Table({tableName: 'goods'})
export class Goods extends Model<Goods, GoodsCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @Column({type: DataType.STRING, allowNull: true})
    composition: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @Column({type: DataType.BOOLEAN, defaultValue: true})
    available: boolean;

    @Column({type: DataType.STRING, allowNull: false})
    imgSrc: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    byCat: number;
}